import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.62.0',
  defaultReleaseBranch: 'main',
  name: 'aws-ec2-auto-scaling-instance-running-scheduler',
  description: 'AWS EC2 AutoScaling Instance Running Scheduler',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-ec2-auto-scaling-instance-running-scheduler.git',
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'aws-ec2-auto-scaling-instance-running-scheduler',
    module: 'aws_ec2_auto_scaling_instance_running_scheduler',
  },
});
project.synth();