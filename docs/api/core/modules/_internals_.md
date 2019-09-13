[API](../README.md) › ["internals"](_internals_.md)

# External module: "internals"


## Index

### Variables

* [globalTitle](_internals_.md#let-globaltitle)

### Functions

* [createLoganFactory](_internals_.md#createloganfactory)
* [getTitle](_internals_.md#gettitle)
* [setGlobalTitle](_internals_.md#setglobaltitle)

### Object literals

* [logLevelValues](_internals_.md#const-loglevelvalues)

## Variables

### `Let` globalTitle

• **globalTitle**: *string* =  isNode() ? '' : window.name

*Defined in [internals.ts:17](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/core/src/internals.ts#L17)*

This should be stored internally and shouldn't be exposed
to the developer

## Functions

###  createLoganFactory

▸ **createLoganFactory**(`method`: [LoganLogLevel](../enums/_types_.loganloglevel.md), `title`: string, `logLevel`: [LoganLogLevel](../enums/_types_.loganloglevel.md), `console`: Partial‹Console› | undefined, `disabled`: boolean | undefined): *(Anonymous function)*

*Defined in [internals.ts:29](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/core/src/internals.ts#L29)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`method` | [LoganLogLevel](../enums/_types_.loganloglevel.md) |
`title` | string |
`logLevel` | [LoganLogLevel](../enums/_types_.loganloglevel.md) |
`console` | Partial‹Console› &#124; undefined |
`disabled` | boolean &#124; undefined |

**Returns:** *(Anonymous function)*

___

###  getTitle

▸ **getTitle**(`title`: string): *string*

*Defined in [internals.ts:56](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/core/src/internals.ts#L56)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *string*

___

###  setGlobalTitle

▸ **setGlobalTitle**(`title`: string): *void*

*Defined in [internals.ts:22](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/core/src/internals.ts#L22)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *void*

## Object literals

### `Const` logLevelValues

### ▪ **logLevelValues**: *object*

*Defined in [internals.ts:5](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/core/src/internals.ts#L5)*

###  debug

• **debug**: *number* = 20

*Defined in [internals.ts:7](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/core/src/internals.ts#L7)*

###  error

• **error**: *number* = 50

*Defined in [internals.ts:10](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/core/src/internals.ts#L10)*

###  info

• **info**: *number* = 30

*Defined in [internals.ts:8](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/core/src/internals.ts#L8)*

###  log

• **log**: *number* = 20

*Defined in [internals.ts:6](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/core/src/internals.ts#L6)*

###  warn

• **warn**: *number* = 40

*Defined in [internals.ts:9](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/core/src/internals.ts#L9)*