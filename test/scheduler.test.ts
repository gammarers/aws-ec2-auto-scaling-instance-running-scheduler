import { App, Stack } from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import { Ec2AutoScalingInstanceRunningScheduler } from '../src';

describe('Ec2AutoScalingInstanceRunningScheduler Testing', () => {

  describe('default schedule', () => {
    const app = new App();
    const stack = new Stack(app, 'TestingStack', {
      env: {
        account: '123456789012',
        region: 'us-east-1',
      },
    });

    new Ec2AutoScalingInstanceRunningScheduler(stack, 'Ec2AutoScalingInstanceRunningScheduler', {
      targets: [
        {
          groupName: 'example-scaling-group',
          runningDesiredCapacity: 2,
          startSchedule: {
            timezone: 'UTC',
          },
          stopSchedule: {
            timezone: 'UTC',
          },
        },
      ],
    });

    const template = Template.fromStack(stack);

    // Schedule execution role
    it('Should have schedule execution role', async () => {
      template.hasResourceProperties('AWS::IAM::Role', Match.objectEquals({
        RoleName: Match.stringLikeRegexp('ec2-auto-scaling-instance-running-schedule-.*-exec-role'),
        AssumeRolePolicyDocument: Match.objectEquals({
          Version: '2012-10-17',
          Statement: Match.arrayWith([
            Match.objectEquals({
              Effect: 'Allow',
              Principal: {
                Service: 'scheduler.amazonaws.com',
              },
              Action: 'sts:AssumeRole',
            }),
          ]),
        }),
        Policies: Match.arrayEquals([
          {
            PolicyName: 'ec2-auto-scaling-desired-capacity-policy',
            PolicyDocument: Match.objectEquals({
              Version: '2012-10-17',
              Statement: [
                Match.objectEquals({
                  Effect: 'Allow',
                  Action: 'autoscaling:SetDesiredCapacity',
                  Resource: 'arn:aws:autoscaling:*:123456789012:autoScalingGroup:*:autoScalingGroupName/*',
                }),
              ],
            }),
          },
        ]),
      }));
    });

    // Start Schedule testing
    it('Should have Start Schedule', async () => {
      template.hasResourceProperties('AWS::Scheduler::Schedule', Match.objectEquals({
        Name: Match.stringLikeRegexp('auto-start-ec2-auto-scaling-instance-.*-schedule'),
        Description: Match.anyValue(),
        State: 'ENABLED',
        FlexibleTimeWindow: {
          Mode: 'OFF',
        },
        ScheduleExpressionTimezone: 'UTC',
        ScheduleExpression: 'cron(50 7 ? * MON-FRI *)',
        Target: Match.objectEquals({
          Arn: 'arn:aws:scheduler:::aws-sdk:autoscaling:setDesiredCapacity',
          RoleArn: {
            'Fn::GetAtt': [
              Match.stringLikeRegexp('Ec2AutoScalingInstanceRunningSchedulerSchedulerExecutionRole.*'),
              'Arn',
            ],
          },
          Input: JSON.stringify({
            AutoScalingGroupName: 'example-scaling-group',
            DesiredCapacity: 2,
          }),
          RetryPolicy: {
            MaximumEventAgeInSeconds: 60,
            MaximumRetryAttempts: 0,
          },
        }),
      }));
    });

    // Stop Schedule testing
    it('Should have Stop Schedule', async () => {
      template.hasResourceProperties('AWS::Scheduler::Schedule', Match.objectEquals({
        Name: Match.stringLikeRegexp('auto-stop-ec2-auto-scaling-instance-.*-schedule'),
        Description: Match.anyValue(),
        State: 'ENABLED',
        FlexibleTimeWindow: {
          Mode: 'OFF',
        },
        ScheduleExpressionTimezone: 'UTC',
        ScheduleExpression: 'cron(10 21 ? * MON-FRI *)',
        Target: Match.objectEquals({
          Arn: 'arn:aws:scheduler:::aws-sdk:autoscaling:setDesiredCapacity',
          RoleArn: {
            'Fn::GetAtt': [
              Match.stringLikeRegexp('Ec2AutoScalingInstanceRunningSchedulerSchedulerExecutionRole.*'),
              'Arn',
            ],
          },
          Input: JSON.stringify({
            AutoScalingGroupName: 'example-scaling-group',
            DesiredCapacity: 0,
          }),
          RetryPolicy: {
            MaximumEventAgeInSeconds: 60,
            MaximumRetryAttempts: 0,
          },
        }),
      }));
    });

    it('Should match snapshot', async () => {
      expect(template.toJSON()).toMatchSnapshot('default');
    });

  });

  describe('specify schedule', () => {
    const app = new App();
    const stack = new Stack(app, 'TestingStack', {
      env: {
        account: '123456789012',
        region: 'us-east-1',
      },
    });

    new Ec2AutoScalingInstanceRunningScheduler(stack, 'Ec2AutoScalingInstanceRunningScheduler', {
      targets: [
        {
          groupName: 'example-scaling-group',
          runningDesiredCapacity: 2,
          startSchedule: {
            timezone: 'Asia/Tokyo',
            minute: '55',
            hour: '8',
            week: 'MON-FRI',
          },
          stopSchedule: {
            timezone: 'Asia/Tokyo',
            minute: '5',
            hour: '19',
            week: 'MON-FRI',
          },
        },
      ],
    });

    const template = Template.fromStack(stack);

    // Start Schedule testing
    it('Should have Start Schedule', async () => {
      template.hasResourceProperties('AWS::Scheduler::Schedule', Match.objectEquals({
        Name: Match.stringLikeRegexp('auto-start-ec2-auto-scaling-instance-.*-schedule'),
        Description: Match.anyValue(),
        State: 'ENABLED',
        FlexibleTimeWindow: {
          Mode: 'OFF',
        },
        ScheduleExpressionTimezone: 'Asia/Tokyo',
        ScheduleExpression: 'cron(55 8 ? * MON-FRI *)',
        Target: Match.objectEquals({
          Arn: 'arn:aws:scheduler:::aws-sdk:autoscaling:setDesiredCapacity',
          RoleArn: {
            'Fn::GetAtt': [
              Match.stringLikeRegexp('Ec2AutoScalingInstanceRunningSchedulerSchedulerExecutionRole.*'),
              'Arn',
            ],
          },
          Input: JSON.stringify({
            AutoScalingGroupName: 'example-scaling-group',
            DesiredCapacity: 2,
          }),
          RetryPolicy: {
            MaximumEventAgeInSeconds: 60,
            MaximumRetryAttempts: 0,
          },
        }),
      }));
    });

    // Stop Schedule testing
    it('Should have Stop Schedule', async () => {
      template.hasResourceProperties('AWS::Scheduler::Schedule', Match.objectEquals({
        Name: Match.stringLikeRegexp('auto-stop-ec2-auto-scaling-instance-.*-schedule'),
        Description: Match.anyValue(),
        State: 'ENABLED',
        FlexibleTimeWindow: {
          Mode: 'OFF',
        },
        ScheduleExpressionTimezone: 'Asia/Tokyo',
        ScheduleExpression: 'cron(5 19 ? * MON-FRI *)',
        Target: Match.objectEquals({
          Arn: 'arn:aws:scheduler:::aws-sdk:autoscaling:setDesiredCapacity',
          RoleArn: {
            'Fn::GetAtt': [
              Match.stringLikeRegexp('Ec2AutoScalingInstanceRunningSchedulerSchedulerExecutionRole.*'),
              'Arn',
            ],
          },
          Input: JSON.stringify({
            AutoScalingGroupName: 'example-scaling-group',
            DesiredCapacity: 0,
          }),
          RetryPolicy: {
            MaximumEventAgeInSeconds: 60,
            MaximumRetryAttempts: 0,
          },
        }),
      }));
    });

    it('Should match snapshot', async () => {
      expect(template.toJSON()).toMatchSnapshot('specify');
    });

  });
});