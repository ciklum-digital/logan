import { LoganLogLevel } from '@logan/core';

import { proxyMethod } from './utils';

export function LogMethod(logLevel: LoganLogLevel = 'debug'): MethodDecorator {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<Function>
  ) => {
    const original = descriptor.value!;
    const className = target.constructor.name;
    const methodName = propertyKey.toString();

    descriptor.value = proxyMethod(logLevel, className, methodName, original);
  };
}
