# AWS EC2 AutoScaling Instance Running Scheduler


# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2AutoScalingInstanceRunningScheduler <a name="Ec2AutoScalingInstanceRunningScheduler" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler"></a>

#### Initializers <a name="Initializers" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer"></a>

```typescript
import { Ec2AutoScalingInstanceRunningScheduler } from '@yicr/aws-ec2-auto-scaling-instance-running-scheduler'

new Ec2AutoScalingInstanceRunningScheduler(scope: Construct, id: string, props: Ec2AutoScalingInstanceRunningSchedulerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.props">props</a></code> | <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps">Ec2AutoScalingInstanceRunningSchedulerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.Initializer.parameter.props"></a>

- *Type:* <a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps">Ec2AutoScalingInstanceRunningSchedulerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.isConstruct"></a>

```typescript
import { Ec2AutoScalingInstanceRunningScheduler } from '@yicr/aws-ec2-auto-scaling-instance-running-scheduler'

Ec2AutoScalingInstanceRunningScheduler.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningScheduler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### AutoScalingGroupsProperty <a name="AutoScalingGroupsProperty" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty"></a>

#### Initializer <a name="Initializer" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.Initializer"></a>

```typescript
import { AutoScalingGroupsProperty } from '@yicr/aws-ec2-auto-scaling-instance-running-scheduler'

const autoScalingGroupsProperty: AutoScalingGroupsProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.runningDesiredCapacity">runningDesiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.startSchedule">startSchedule</a></code> | <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty">ScheduleProperty</a></code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.stopSchedule">stopSchedule</a></code> | <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty">ScheduleProperty</a></code> | *No description.* |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `runningDesiredCapacity`<sup>Required</sup> <a name="runningDesiredCapacity" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.runningDesiredCapacity"></a>

```typescript
public readonly runningDesiredCapacity: number;
```

- *Type:* number

---

##### `startSchedule`<sup>Required</sup> <a name="startSchedule" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.startSchedule"></a>

```typescript
public readonly startSchedule: ScheduleProperty;
```

- *Type:* <a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty">ScheduleProperty</a>

---

##### `stopSchedule`<sup>Required</sup> <a name="stopSchedule" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty.property.stopSchedule"></a>

```typescript
public readonly stopSchedule: ScheduleProperty;
```

- *Type:* <a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty">ScheduleProperty</a>

---

### Ec2AutoScalingInstanceRunningSchedulerProps <a name="Ec2AutoScalingInstanceRunningSchedulerProps" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps"></a>

#### Initializer <a name="Initializer" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps.Initializer"></a>

```typescript
import { Ec2AutoScalingInstanceRunningSchedulerProps } from '@yicr/aws-ec2-auto-scaling-instance-running-scheduler'

const ec2AutoScalingInstanceRunningSchedulerProps: Ec2AutoScalingInstanceRunningSchedulerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps.property.targets">targets</a></code> | <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty">AutoScalingGroupsProperty</a>[]</code> | *No description.* |

---

##### `targets`<sup>Required</sup> <a name="targets" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.Ec2AutoScalingInstanceRunningSchedulerProps.property.targets"></a>

```typescript
public readonly targets: AutoScalingGroupsProperty[];
```

- *Type:* <a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.AutoScalingGroupsProperty">AutoScalingGroupsProperty</a>[]

---

### ScheduleProperty <a name="ScheduleProperty" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty"></a>

#### Initializer <a name="Initializer" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.Initializer"></a>

```typescript
import { ScheduleProperty } from '@yicr/aws-ec2-auto-scaling-instance-running-scheduler'

const scheduleProperty: ScheduleProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.hour">hour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.minute">minute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.week">week</a></code> | <code>string</code> | *No description.* |

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.hour"></a>

```typescript
public readonly hour: string;
```

- *Type:* string

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.minute"></a>

```typescript
public readonly minute: string;
```

- *Type:* string

---

##### `week`<sup>Optional</sup> <a name="week" id="@yicr/aws-ec2-auto-scaling-instance-running-scheduler.ScheduleProperty.property.week"></a>

```typescript
public readonly week: string;
```

- *Type:* string

---



