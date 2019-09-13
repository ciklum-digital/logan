[API](../README.md) › ["logan"](../modules/_logan_.md) › [Logan](_logan_.logan.md)

# Class: Logan


This class has to be lightweight and should not expose any private API
in its prototype methods

## Hierarchy

* **Logan**

## Index

### Constructors

* [constructor](_logan_.logan.md#constructor)

### Properties

* [config](_logan_.logan.md#protected-config)
* [debug](_logan_.logan.md#debug)
* [error](_logan_.logan.md#error)
* [info](_logan_.logan.md#info)
* [log](_logan_.logan.md#log)
* [warn](_logan_.logan.md#warn)
* [setGlobalTitle](_logan_.logan.md#static-setglobaltitle)

### Methods

* [getTitle](_logan_.logan.md#gettitle)
* [setTitle](_logan_.logan.md#settitle)

## Constructors

###  constructor

\+ **new Logan**(`config`: [LoganConfig](../interfaces/_types_.loganconfig.md)): *[Logan](_logan_.logan.md)*

*Defined in [logan.ts:29](https://github.com/ciklum-digital/logan/blob/8316871/packages/core/src/logan.ts#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | [LoganConfig](../interfaces/_types_.loganconfig.md) |  {} |

**Returns:** *[Logan](_logan_.logan.md)*

## Properties

### `Protected` config

• **config**: *[LoganConfig](../interfaces/_types_.loganconfig.md)*

*Defined in [logan.ts:31](https://github.com/ciklum-digital/logan/blob/8316871/packages/core/src/logan.ts#L31)*

___

###  debug

• **debug**: *function*

*Defined in [logan.ts:52](https://github.com/ciklum-digital/logan/blob/8316871/packages/core/src/logan.ts#L52)*

#### Type declaration:

▸ (`message?`: any, ...`optionalParams`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

___

###  error

• **error**: *function*

*Defined in [logan.ts:51](https://github.com/ciklum-digital/logan/blob/8316871/packages/core/src/logan.ts#L51)*

#### Type declaration:

▸ (`message?`: any, ...`optionalParams`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

___

###  info

• **info**: *function*

*Defined in [logan.ts:49](https://github.com/ciklum-digital/logan/blob/8316871/packages/core/src/logan.ts#L49)*

#### Type declaration:

▸ (`message?`: any, ...`optionalParams`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

___

###  log

• **log**: *function*

*Defined in [logan.ts:48](https://github.com/ciklum-digital/logan/blob/8316871/packages/core/src/logan.ts#L48)*

These properties will be created dynamically

#### Type declaration:

▸ (`message?`: any, ...`optionalParams`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

___

###  warn

• **warn**: *function*

*Defined in [logan.ts:50](https://github.com/ciklum-digital/logan/blob/8316871/packages/core/src/logan.ts#L50)*

#### Type declaration:

▸ (`message?`: any, ...`optionalParams`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

___

### `Static` setGlobalTitle

▪ **setGlobalTitle**: *function* =  setGlobalTitle

*Defined in [logan.ts:23](https://github.com/ciklum-digital/logan/blob/8316871/packages/core/src/logan.ts#L23)*

Static properties has to reference external functions if they don't
collaborate with `this` property. This can benefit more readily from
tree shaking

#### Type declaration:

▸ (`globalTitle`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`globalTitle` | string |

## Methods

###  getTitle

▸ **getTitle**(): *string*

*Defined in [logan.ts:58](https://github.com/ciklum-digital/logan/blob/8316871/packages/core/src/logan.ts#L58)*

**Returns:** *string*

___

###  setTitle

▸ **setTitle**(`title`: string): *void*

*Defined in [logan.ts:54](https://github.com/ciklum-digital/logan/blob/8316871/packages/core/src/logan.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *void*