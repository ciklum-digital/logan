**[API](../README.md)**

[Globals](../README.md) › [&quot;utils&quot;](_utils_.md)

# External module: "utils"

## Index

### Functions

* [formatError](_utils_.md#formaterror)
* [isBrowser](_utils_.md#isbrowser)
* [isEmptyString](_utils_.md#isemptystring)
* [isNode](_utils_.md#isnode)

## Functions

###  formatError

▸ **formatError**(`error`: unknown): *unknown*

*Defined in [utils.ts:11](https://github.com/ciklum-digital/logan/blob/6d38830/packages/core/src/utils.ts#L11)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`error` | unknown |

**Returns:** *unknown*

___

###  isBrowser

▸ **isBrowser**(): *boolean*

*Defined in [utils.ts:38](https://github.com/ciklum-digital/logan/blob/6d38830/packages/core/src/utils.ts#L38)*

**`internal`** 

**Returns:** *boolean*

___

###  isEmptyString

▸ **isEmptyString**(`target`: unknown): *boolean*

*Defined in [utils.ts:4](https://github.com/ciklum-digital/logan/blob/6d38830/packages/core/src/utils.ts#L4)*

**`internal`** 

**Parameters:**

Name | Type |
------ | ------ |
`target` | unknown |

**Returns:** *boolean*

___

###  isNode

▸ **isNode**(): *boolean*

*Defined in [utils.ts:31](https://github.com/ciklum-digital/logan/blob/6d38830/packages/core/src/utils.ts#L31)*

Determines if we're in the Node environment, `process` or
`global` validation is enough

**`internal`** 

**Returns:** *boolean*