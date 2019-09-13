![Logan](https://ciklum-digital.github.io/logan/assets/images/icon.svg)

> Angular wrapper for the Logan library

## Table of contents
1. [Installation](#installation)
3. [Usage and API](#usage-and-api)

## Installation

To install `@logan/angular` package run the following command:

```bash
npm i @logan/{core,angular}
# Or if you use yarn
yarn add @logan/{core,angular}
```

## Usage and API

`@logan/angular` exposes `NgLoganModule` that you have to import first:

```ts
import { LoganLogLevel } from '@logan/core';
import { NgLoganModule } from '@logan/angular';

@NgModule({
  imports: [
    NgLoganModule.forRoot({
      title: 'basket-app',
      logLevel: LoganLogLeve.Log,
      globalTitle: 'auto-parts-store',
      disabled: environment.production
    })
  ]
})
export class AppModule {}
```

All possible `forRoot` options are given below:

```ts
{
  title?: string;
  disabled?: boolean;
  globalTitle?: string;
  console?: Partial<Console>;
  logLevel?: LoganLogLevel;
  ignoreLogLevel?: boolean;
}
```

### NgLoganService

Let's move forward and look at the `NgLoganService` class that is injectable one. This class is a singleton and can be used everywhere accross your application:

```ts
import { NgLoganService } from '@logan/angular';

@Component({ ... })
export class SearchComponent {
  constructor(private ngLoganService: NgLoganService) {}

  search(value: string): void {
    // The output will be:
    // [auto-parts-store::basket-app] search value is %
    this.ngLoganService.log(`search value is ${value}`);
  }
}
```

### Decorators

There are 3 publicly exposed decorators for classes, properties and methods.

#### Loganify

`@Loganify` is a decorator that let's you decorates class properties and defines getter for the decorated property that returns `Logan` instance. Given the following example:

```ts
import { Logan } from '@logan/core';
import { Loganify } from '@logan/angular';

@Component({ ... })
export class SearchComponent {
  @Loganify({ title: 'search-component' }) private logan: Logan;

  search(value: string): void {
    // The output will be
    // [auto-parts-store::search-component] search value is %
    this.logan.log(`search value is ${value}`);
  }
}
```

#### EnableMethodLogging

`@EnableMethodLogging` is a method decorator. It logs method's arguments, invoked with, and method's result. Let's look at the below code:

```ts
import { EnableMethodLogging } from '@logan/angular';

@Component({ ... })
export class SearchComponent {
  @EnableMethodLogging()
  search(value: string): void {
    // The output will be
    // [auto-parts-store::basket-app] SearchComponent - search - parameters: [%value%]
    // [auto-parts-store::basket-app] SearchComponent - search - result: undefined
    
    // do something here...
  }
}
```

`@EnableMethodLogging` decorators can be used together with properties, decorated with `@Loganify`. As a result these methods will use a local `Logan` instance:

```ts
import { Logan } from '@logan/core';
import { Loganify, EnableMethodLogging } from '@logan/angular';

@Component({ ... })
export class SearchComponent {
  @Loganify({ title: 'search-component' }) private logan: Logan;

  @EnableMethodLogging()
  search(value: string): void {
    // The output will be
    // [auto-parts-store::search-component] SearchComponent - search - parameters: [%value%]
    // [auto-parts-store::search-component] SearchComponent - search - result: undefined

    // do something here...
  }
}
```

#### EnableMethodsLogging

`@EnableMethodsLogging` is a class decorator that automatically enables logging for all methods instead of life cycle hooks:

```ts
import { Logan } from '@logan/core';
import { EnableMethodsLogging } from '@logan/angular';

@EnableMethodsLogging()
@Component({ ... })
export class SearchComponent implements DoCheck, OnInit {
  // `ngDoCheck` invokations will not be logged
  ngDoCheck(): void {}

  // `ngOnInit` invokation will not be logged
  ngOnInit(): void {}

  search(value: string): void {
    // The output will be
    // [auto-parts-store::basket-app] SearchComponent - search - parameters: [%value%]
    // [auto-parts-store::basket-app] SearchComponent - search - result: undefined

    // do something here...
  }

  getItems(): void {
    // [auto-parts-store::basket-app] SearchComponent - getItems - parameters: []
    // [auto-parts-store::basket-app] SearchComponent - getItems - result: undefined
  }
}
```
