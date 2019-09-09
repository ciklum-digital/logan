import { LoganLogLevel } from '@logan/core';

import { proxyMethod } from './utils';

export function LogMethods(logLevel: LoganLogLevel = 'debug'): ClassDecorator {
  return (target: Function) => {
    const className = target.name;
    const prototype = target.prototype;
    const methodNames = getMethodNames(prototype);

    for (const methodName of methodNames) {
      const original = prototype[methodName];
      prototype[methodName] = proxyMethod(logLevel, className, methodName, original);
    }
  };
}

const hooks = [
  'ngOnChanges',
  'ngDoCheck',
  'ngOnInit',
  'ngAfterContentChecked',
  'ngAfterContentInit',
  'ngAfterViewChecked',
  'ngAfterViewInit'
];

function getMethodNames(prototype: any): string[] {
  // `Set` items are unique and we've got class that extends another
  // class then we would have 2 `constructor` strings
  const methodNames = new Set<string>();

  do {
    const propertyNames = Object.getOwnPropertyNames(prototype);

    for (const propertyName of propertyNames) {
      if (typeof prototype[propertyName] === 'function') {
        methodNames.add(propertyName);
      }
    }

    prototype = Object.getPrototypeOf(prototype);
    // This condition handles cases of class extending
    // e.g. if we decorate a component that extends some base components
    // `@LogMethods() class MatButton extends Button {}`
  } while (prototype.constructor !== Object);

  return [...methodNames.values()].filter(propertyName => hooks.indexOf(propertyName) === -1);
}
