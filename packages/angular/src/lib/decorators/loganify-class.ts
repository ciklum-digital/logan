import { LoganLogLevel } from '@logan/core';

import { createProxyFactory } from './create-proxy-factory';

export function LoganifyClass(logLevel = LoganLogLevel.Debug): ClassDecorator {
  return (target: Function) => {
    const className = target.name;
    const prototype = target.prototype;
    const methodNames = getMethodNames(prototype);

    for (const methodName of methodNames) {
      const original = prototype[methodName];
      prototype[methodName] = createProxyFactory(logLevel, className, methodName, original);
    }
  };
}

const hooks: readonly string[] = [
  'constructor',
  'ngOnChanges',
  'ngDoCheck',
  'ngOnInit',
  'ngAfterContentChecked',
  'ngAfterContentInit',
  'ngAfterViewChecked',
  'ngAfterViewInit',
  'ngOnDestroy'
];

function getMethodNames(prototype: any): readonly string[] {
  // `Set` items are unique and if we've got class that extends another
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
    // e.g. if we decorate a component that extends some base component
    // `@LogMethods() class MatButton extends Button {}`
  } while (prototype.constructor !== Object);

  // Remove life cycle methods as we don't need to track them
  return [...methodNames.values()].filter(methodName => hooks.indexOf(methodName) === -1);
}
