[![GitHub](https://img.shields.io/github/license/yicr/aws-ec2-auto-scaling-instance-running-scheduler?style=flat-square)](https://github.com/yicr/aws-ec2-auto-scaling-instance-running-scheduler/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarer/aws-ec2-auto-scaling-instance-running-scheduler?style=flat-square)](https://www.npmjs.com/package/@gammarer/aws-ec2-auto-scaling-instance-running-scheduler)
[![PyPI](https://img.shields.io/pypi/v/gammarer.aws-ec2-auto-scaling-instance-running-scheduler?style=flat-square)](https://pypi.org/project/gammarer.aws-ec2-auto-scaling-instance-running-scheduler/)
[![Nuget](https://img.shields.io/nuget/v/Gammarer.CDK.AWS.Ec2AutoScalingInstanceRunningScheduler?style=flat-square)](https://www.nuget.org/packages/Gammarer.CDK.AWS.Ec2AutoScalingInstanceRunningScheduler/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.gammarer/aws-ec2-auto-scaling-instance-running-scheduler?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/gammarer/aws-ec2-auto-scaling-instance-running-scheduler/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/yicr/aws-ec2-auto-scaling-instance-running-scheduler/release.yml?branch=main&label=release&style=flat-square)](https://github.com/yicr/aws-ec2-auto-scaling-instance-running-scheduler/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/yicr/aws-ec2-auto-scaling-instance-running-scheduler?sort=semver&style=flat-square)](https://github.com/yicr/aws-ec2-auto-scaling-instance-running-scheduler/releases)

# AWS EC2 AutoScaling Instance Running Scheduler

This is an AWS CDK Construct to make EC2 AutoScaling instance running schedule (only running while working hours(start/stop)).
But only capacity min value is 0 for the AutoScalingGroup.

## Resources

This construct creating resource list.

- EventBridge Scheduler execution role
- EventBridge Scheduler

## Install

### TypeScript

```shell
npm install @gammarer/aws-ec2-auto-scaling-instance-running-scheduler
# or
yarn add @gammarer/aws-ec2-auto-scaling-instance-running-scheduler
```

### Python

```shell
pip install gammarer.aws-ec2-auto-scaling-instance-running-scheduler
```

### C# / .NET

```shell
dotnet add package Gammarer.CDK.AWS.Ec2AutoScalingInstanceRunningScheduler
```

### Java

Add the following to pom.xml:

```xml
<dependency>
  <groupId>com.gammarer</groupId>
  <artifactId>aws-ec2-auto-scaling-instance-running-scheduler</artifactId>
</dependency>
```


## Example

```typescript
import { Ec2AutoScalingInstanceRunningScheduler } from '@gammarer/aws-ec2-auto-scaling-instance-running-scheduler';

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

```

## License

This project is licensed under the Apache-2.0 License.







# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2AutoScalingInstanceRunningScheduler <a name="Ec2AutoScalingInstanceRunningScheduler" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler"></a>

#### Initializers <a name="Initializers" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer"></a>

```typescript
import { Ec2AutoScalingInstanceRunningScheduler } from '@gammarer/aws-ec2-auto-scaling-instance-running-scheduler'

new Ec2AutoScalingInstanceRunningScheduler(scope: Construct, id: string, props: Ec2AutoScalingInstanceRunningSchedulerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps">Ec2AutoScalingInstanceRunningSchedulerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps">Ec2AutoScalingInstanceRunningSchedulerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.isConstruct"></a>

```typescript
import { Ec2AutoScalingInstanceRunningScheduler } from '@gammarer/aws-ec2-auto-scaling-instance-running-scheduler'

Ec2AutoScalingInstanceRunningScheduler.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### AutoScalingGroupsProperty <a name="AutoScalingGroupsProperty" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty"></a>

#### Initializer <a name="Initializer" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.Initializer"></a>

```typescript
import { AutoScalingGroupsProperty } from '@gammarer/aws-ec2-auto-scaling-instance-running-scheduler'

const autoScalingGroupsProperty: AutoScalingGroupsProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.runningDesiredCapacity">runningDesiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.startSchedule">startSchedule</a></code> | <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty">ScheduleProperty</a></code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.stopSchedule">stopSchedule</a></code> | <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty">ScheduleProperty</a></code> | *No description.* |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `runningDesiredCapacity`<sup>Required</sup> <a name="runningDesiredCapacity" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.runningDesiredCapacity"></a>

```typescript
public readonly runningDesiredCapacity: number;
```

- *Type:* number

---

##### `startSchedule`<sup>Required</sup> <a name="startSchedule" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.startSchedule"></a>

```typescript
public readonly startSchedule: ScheduleProperty;
```

- *Type:* <a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty">ScheduleProperty</a>

---

##### `stopSchedule`<sup>Required</sup> <a name="stopSchedule" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.stopSchedule"></a>

```typescript
public readonly stopSchedule: ScheduleProperty;
```

- *Type:* <a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty">ScheduleProperty</a>

---

### Ec2AutoScalingInstanceRunningSchedulerProps <a name="Ec2AutoScalingInstanceRunningSchedulerProps" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps"></a>

#### Initializer <a name="Initializer" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps.Initializer"></a>

```typescript
import { Ec2AutoScalingInstanceRunningSchedulerProps } from '@gammarer/aws-ec2-auto-scaling-instance-running-scheduler'

const ec2AutoScalingInstanceRunningSchedulerProps: Ec2AutoScalingInstanceRunningSchedulerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps.property.targets">targets</a></code> | <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty">AutoScalingGroupsProperty</a>[]</code> | *No description.* |

---

##### `targets`<sup>Required</sup> <a name="targets" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps.property.targets"></a>

```typescript
public readonly targets: AutoScalingGroupsProperty[];
```

- *Type:* <a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty">AutoScalingGroupsProperty</a>[]

---

### ScheduleProperty <a name="ScheduleProperty" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty"></a>

#### Initializer <a name="Initializer" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.Initializer"></a>

```typescript
import { ScheduleProperty } from '@gammarer/aws-ec2-auto-scaling-instance-running-scheduler'

const scheduleProperty: ScheduleProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.hour">hour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.minute">minute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.week">week</a></code> | <code>string</code> | *No description.* |

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.hour"></a>

```typescript
public readonly hour: string;
```

- *Type:* string

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.minute"></a>

```typescript
public readonly minute: string;
```

- *Type:* string

---

##### `week`<sup>Optional</sup> <a name="week" id="@gammarer/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.week"></a>

```typescript
public readonly week: string;
```

- *Type:* string

---



