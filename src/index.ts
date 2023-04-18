import * as crypto from 'crypto';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as scheduler from 'aws-cdk-lib/aws-scheduler';
import { Construct } from 'constructs';

export interface ScheduleProperty {
  readonly timezone: string;
  readonly minute?: string;
  readonly hour?: string;
  readonly week?: string;
}

export interface AutoScalingGroupsProperty {
  readonly groupName: string;
  readonly runningDesiredCapacity: number;
  readonly stopSchedule: ScheduleProperty;
  readonly startSchedule: ScheduleProperty;
}

export interface Ec2AutoScalingInstanceRunningSchedulerProps {
  readonly targets: AutoScalingGroupsProperty[];
}

export class Ec2AutoScalingInstanceRunningScheduler extends Construct {
  constructor(scope: Construct, id: string, props: Ec2AutoScalingInstanceRunningSchedulerProps) {
    super(scope, id);

    const account = cdk.Stack.of(this).account;
    //const stackName: string = cdk.Stack.of(this).stackName;
    //const region = cdk.Stack.of(this).region;

    const randomNameKey = crypto.createHash('shake256', { outputLength: 4 })
      .update(`${cdk.Names.uniqueId(scope)}-${cdk.Names.uniqueId(this)}`)
      .digest('hex');

    // 👇EventBridge Scheduler IAM Role
    const schedulerExecutionRole = new iam.Role(this, 'SchedulerExecutionRole', {
      roleName: `ec2-auto-scaling-instance-running-schedule-${randomNameKey}-exec-role`,
      assumedBy: new iam.ServicePrincipal('scheduler.amazonaws.com'),
      inlinePolicies: {
        ['ec2-auto-scaling-desired-capacity-policy']: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              effect: iam.Effect.ALLOW,
              actions: [
                'autoscaling:SetDesiredCapacity',
              ],
              resources: [
                `arn:aws:autoscaling:*:${account}:autoScalingGroup:*:autoScalingGroupName/*`,
              ],
            }),
          ],
        }),
      },
    });

    for (const target of props.targets) {

      // 👇Create random string
      const scheduleNameKey = crypto.createHash('shake256', { outputLength: 4 })
        .update(target.groupName)
        .digest('hex');

      // 👇EventBridge Scheduler for DB Instance Stop
      new scheduler.CfnSchedule(this, `StopSchedule${scheduleNameKey.toUpperCase()}`, {
        name: `auto-stop-ec2-auto-scaling-instance-${scheduleNameKey}-schedule`,
        description: `auto stop ec2 auto scaling group (${target.groupName}) schedule.`,
        state: 'ENABLED',
        //groupName: scheduleGroup.name, // default
        flexibleTimeWindow: {
          mode: 'OFF',
        },
        scheduleExpressionTimezone: target.stopSchedule.timezone,
        scheduleExpression: (() => {
          // default: weekday 21:10
          const minute: string = target.stopSchedule.minute ?? '10';
          const hour: string = target.stopSchedule.hour ?? '21';
          const week: string = target.stopSchedule.week ?? 'MON-FRI';
          return `cron(${minute} ${hour} ? * ${week} *)`;
        })(),
        target: {
          arn: 'arn:aws:scheduler:::aws-sdk:autoscaling:setDesiredCapacity',
          roleArn: schedulerExecutionRole.roleArn,
          input: JSON.stringify({
            AutoScalingGroupName: target.groupName,
            DesiredCapacity: 0,
          }),
          retryPolicy: {
            maximumEventAgeInSeconds: 60,
            maximumRetryAttempts: 0,
          },
        },
      });

      // 👇EventBridge Scheduler for DB Instance Start
      new scheduler.CfnSchedule(this, `StartSchedule${scheduleNameKey.toUpperCase()}`, {
        name: `auto-start-ec2-auto-scaling-instance-${scheduleNameKey}-schedule`,
        description: `auto start ec2 auto scaling group (${target.groupName}) schedule.`,
        state: 'ENABLED',
        //groupName: scheduleGroup.name, // default
        flexibleTimeWindow: {
          mode: 'OFF',
        },
        scheduleExpressionTimezone: target.startSchedule.timezone,
        scheduleExpression: (() => {
          // default: weekday 07:50
          const minute: string = target.startSchedule.minute ?? '50';
          const hour: string = target.startSchedule.hour ?? '7';
          const week: string = target.startSchedule.week ?? 'MON-FRI';
          return `cron(${minute} ${hour} ? * ${week} *)`;
        })(),
        target: {
          arn: 'arn:aws:scheduler:::aws-sdk:autoscaling:setDesiredCapacity',
          roleArn: schedulerExecutionRole.roleArn,
          input: JSON.stringify({
            AutoScalingGroupName: target.groupName,
            DesiredCapacity: target.runningDesiredCapacity,
          }),
          retryPolicy: {
            maximumEventAgeInSeconds: 60,
            maximumRetryAttempts: 0,
          },
        },
      });
    }
  }
}
