[API](../README.md) › ["lib/decorators/enable-methods-logging"](_lib_decorators_enable_methods_logging_.md)

# External module: "lib/decorators/enable-methods-logging"


## Index

### Variables

* [hooks](_lib_decorators_enable_methods_logging_.md#const-hooks)

### Functions

* [EnableMethodsLogging](_lib_decorators_enable_methods_logging_.md#enablemethodslogging)
* [getMethodNames](_lib_decorators_enable_methods_logging_.md#getmethodnames)

## Variables

### `Const` hooks

• **hooks**: *keyof string[]* =  [
  'constructor',
  'ngOnChanges',
  'ngDoCheck',
  'ngOnInit',
  'ngAfterContentChecked',
  'ngAfterContentInit',
  'ngAfterViewChecked',
  'ngAfterViewInit',
  'ngOnDestroy'
]

*Defined in [lib/decorators/enable-methods-logging.ts:18](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/angular/src/lib/decorators/enable-methods-logging.ts#L18)*

## Functions

###  EnableMethodsLogging

▸ **EnableMethodsLogging**(`logLevel`: LoganLogLevel): *ClassDecorator*

*Defined in [lib/decorators/enable-methods-logging.ts:5](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/angular/src/lib/decorators/enable-methods-logging.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`logLevel` | LoganLogLevel |  LoganLogLevel.Debug |

**Returns:** *ClassDecorator*

___

###  getMethodNames

▸ **getMethodNames**(`prototype`: any): *keyof string[]*

*Defined in [lib/decorators/enable-methods-logging.ts:30](https://github.com/ciklum-digital/logan/blob/af9fe3e/packages/angular/src/lib/decorators/enable-methods-logging.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`prototype` | any |

**Returns:** *keyof string[]*