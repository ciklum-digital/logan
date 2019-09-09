import { LoganConfig, Logan } from '@logan/core';

import { getNgLogan } from '../internals/static-injector';

const cache = new WeakMap<Object, Logan>();

export function Logger(config?: LoganConfig): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    Object.defineProperty(target, propertyKey, {
      // Retrieve from cache or save to cache and retrieve
      get: () => {
        if (cache.has(target)) {
          return cache.get(target);
        }

        return cache.set(target, getNgLogan().createLogan(config)).get(target);
      }
    });
  };
}
