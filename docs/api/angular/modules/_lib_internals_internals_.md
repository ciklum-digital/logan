[API](../README.md) › ["lib/internals/internals"](_lib_internals_internals_.md)

# External module: "lib/internals/internals"


## Index

### Variables

* [LOGAN_KEY](_lib_internals_internals_.md#const-logan_key)
* [NG_LOGAN_CONFIG](_lib_internals_internals_.md#const-ng_logan_config)

## Variables

### `Const` LOGAN_KEY

• **LOGAN_KEY**: *keyof symbol* =  Symbol('__logan')

*Defined in [lib/internals/internals.ts:14](https://github.com/ciklum-digital/logan/blob/8316871/packages/angular/src/lib/internals/internals.ts#L14)*

This symbol is used inside instances and protects the user
from unintentional access to this property

**`internal`** 

___

### `Const` NG_LOGAN_CONFIG

• **NG_LOGAN_CONFIG**: *InjectionToken‹LoganConfig›* =  new InjectionToken<LoganConfig>('NG_LOGAN_CONFIG')

*Defined in [lib/internals/internals.ts:7](https://github.com/ciklum-digital/logan/blob/8316871/packages/angular/src/lib/internals/internals.ts#L7)*

**`internal`**