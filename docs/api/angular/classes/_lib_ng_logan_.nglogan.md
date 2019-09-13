[API](../README.md) › ["lib/ng-logan"](../modules/_lib_ng_logan_.md) › [NgLogan](_lib_ng_logan_.nglogan.md)

# Class: NgLogan


## Hierarchy

* Logan

  ↳ **NgLogan**

## Index

### Constructors

* [constructor](_lib_ng_logan_.nglogan.md#constructor)

### Properties

* [config](_lib_ng_logan_.nglogan.md#protected-config)
* [debug](_lib_ng_logan_.nglogan.md#debug)
* [error](_lib_ng_logan_.nglogan.md#error)
* [info](_lib_ng_logan_.nglogan.md#info)
* [log](_lib_ng_logan_.nglogan.md#log)
* [warn](_lib_ng_logan_.nglogan.md#warn)
* [setGlobalTitle](_lib_ng_logan_.nglogan.md#static-setglobaltitle)

### Methods

* [createLogan](_lib_ng_logan_.nglogan.md#createlogan)
* [getTitle](_lib_ng_logan_.nglogan.md#gettitle)
* [setTitle](_lib_ng_logan_.nglogan.md#settitle)

## Constructors

###  constructor

\+ **new NgLogan**(`config`: LoganConfig): *[NgLogan](_lib_ng_logan_.nglogan.md)*

*Overrides void*

*Defined in [lib/ng-logan.ts:7](https://github.com/ciklum-digital/logan/blob/8316871/packages/angular/src/lib/ng-logan.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | LoganConfig |

**Returns:** *[NgLogan](_lib_ng_logan_.nglogan.md)*

## Properties

### `Protected` config

• **config**: *LoganConfig*

*Inherited from void*

Defined in /home/overthesanity/projects/ciklum-digital/logan/packages/core/dist/logan.d.ts:3

___

###  debug

• **debug**: *function*

*Inherited from void*

Defined in /home/overthesanity/projects/ciklum-digital/logan/packages/core/dist/logan.d.ts:11

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

*Inherited from void*

Defined in /home/overthesanity/projects/ciklum-digital/logan/packages/core/dist/logan.d.ts:10

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

*Inherited from void*

Defined in /home/overthesanity/projects/ciklum-digital/logan/packages/core/dist/logan.d.ts:8

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

*Inherited from void*

Defined in /home/overthesanity/projects/ciklum-digital/logan/packages/core/dist/logan.d.ts:7

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

*Inherited from void*

Defined in /home/overthesanity/projects/ciklum-digital/logan/packages/core/dist/logan.d.ts:9

#### Type declaration:

▸ (`message?`: any, ...`optionalParams`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message?` | any |
`...optionalParams` | any[] |

___

### `Static` setGlobalTitle

▪ **setGlobalTitle**: *function*

*Inherited from void*

Defined in /home/overthesanity/projects/ciklum-digital/logan/packages/core/dist/logan.d.ts:4

#### Type declaration:

▸ (`globalTitle`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`globalTitle` | string |

## Methods

###  createLogan

▸ **createLogan**(`config?`: LoganConfig): *Logan*

*Defined in [lib/ng-logan.ts:12](https://github.com/ciklum-digital/logan/blob/8316871/packages/angular/src/lib/ng-logan.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`config?` | LoganConfig |

**Returns:** *Logan*

___

###  getTitle

▸ **getTitle**(): *string*

*Inherited from void*

Defined in /home/overthesanity/projects/ciklum-digital/logan/packages/core/dist/logan.d.ts:13

**Returns:** *string*

___

###  setTitle

▸ **setTitle**(`title`: string): *void*

*Inherited from void*

Defined in /home/overthesanity/projects/ciklum-digital/logan/packages/core/dist/logan.d.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *void*