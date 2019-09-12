**[API](../README.md)**

[Globals](../README.md) › [&quot;config&quot;](_config_.md)

# External module: "config"

## Index

### Variables

* [nativeConsole](_config_.md#const-nativeconsole)

### Functions

* [getLogLevel](_config_.md#getloglevel)
* [getNativeConsole](_config_.md#getnativeconsole)

## Variables

### `Const` nativeConsole

• **nativeConsole**: *Console* =  (isNode() && global.console) || window.console

*Defined in [config.ts:4](https://github.com/ciklum-digital/logan/blob/6d38830/packages/core/src/config.ts#L4)*

## Functions

###  getLogLevel

▸ **getLogLevel**(`ignoreLogLevel`: boolean | undefined, `logLevel`: [LoganLogLevel](../enums/_types_.loganloglevel.md) | undefined): *[LoganLogLevel](../enums/_types_.loganloglevel.md)*

*Defined in [config.ts:18](https://github.com/ciklum-digital/logan/blob/6d38830/packages/core/src/config.ts#L18)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`ignoreLogLevel` | boolean &#124; undefined |
`logLevel` | [LoganLogLevel](../enums/_types_.loganloglevel.md) &#124; undefined |

**Returns:** *[LoganLogLevel](../enums/_types_.loganloglevel.md)*

___

###  getNativeConsole

▸ **getNativeConsole**(`console`: Partial‹Console› | undefined): *Partial‹Console›*

*Defined in [config.ts:11](https://github.com/ciklum-digital/logan/blob/6d38830/packages/core/src/config.ts#L11)*

As user is able to provide custom console object, that implements `Console`
interface, then we have to derermine if there is a need to use the native console

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`console` | Partial‹Console› &#124; undefined |

**Returns:** *Partial‹Console›*