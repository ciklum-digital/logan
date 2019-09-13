[API](../README.md) › ["lib/internals/internals"](_lib_internals_internals_.md)

# External module: "lib/internals/internals"


## Index

### Interfaces

* [NgLoganConfig](../interfaces/_lib_internals_internals_.ngloganconfig.md)

### Variables

* [LOGAN_KEY](_lib_internals_internals_.md#const-logan_key)
* [NG_LOGAN_CONFIG](_lib_internals_internals_.md#const-ng_logan_config)

## Variables

### `Const` LOGAN_KEY

• **LOGAN_KEY**: *keyof symbol* =  Symbol('__logan')

*Defined in [lib/internals/internals.ts:21](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/angular/src/lib/internals/internals.ts#L21)*

This symbol is used inside instances and protects the user
from unintentional access to this property

**`internal`** 

___

### `Const` NG_LOGAN_CONFIG

• **NG_LOGAN_CONFIG**: *InjectionToken‹[NgLoganConfig](../interfaces/_lib_internals_internals_.ngloganconfig.md)›* =  new InjectionToken<NgLoganConfig>('NG_LOGAN_CONFIG')

*Defined in [lib/internals/internals.ts:14](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/angular/src/lib/internals/internals.ts#L14)*

**`internal`**