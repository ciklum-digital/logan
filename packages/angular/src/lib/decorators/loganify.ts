import { LoganConfig } from '@logan/core';

import { LOGAN_KEY } from '../internals/internals';
import { getNgLogan } from '../internals/static-injector';

export function Loganify(config?: LoganConfig): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    Object.defineProperty(target, propertyKey, {
      enumerable: true,
      configurable: true,
      get() {
        // Retrieve from instance or create and retrieve
        return this[LOGAN_KEY] || (this[LOGAN_KEY] = getNgLogan().createLogan(config));
      }
    });
  };
}
