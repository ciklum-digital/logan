import { LoganLogLevel } from '@logan/core';

import { createProxyFactory } from './create-proxy-factory';

export function EnableMethodLogging(logLevel = LoganLogLevel.Debug): MethodDecorator {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<unknown>
  ) => {
    const original = descriptor.value as NonNullable<Function>;
    const className = target.constructor.name;
    const methodName = propertyKey.toString();
    descriptor.value = createProxyFactory(logLevel, className, methodName, original);
  };
}
