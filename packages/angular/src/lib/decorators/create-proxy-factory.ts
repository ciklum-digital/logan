import { LoganLogLevel } from '@logan/core';

import { LOGAN_KEY } from '../internals/internals';
import { getNgLogan } from '../internals/static-injector';

/**
 * @internal
 */
export function createProxyFactory(
  logLevel: LoganLogLevel,
  className: string,
  methodName: string,
  original: Function
): Function {
  return function(this: any, ...args: any) {
    // If an instance has some property decorated with
    // `@Logger()` then let's use the private logan
    // otherwise use `NgLogan` instance
    const logan = this[LOGAN_KEY] || getNgLogan();
    // It's important to use `args` except of `arguments`
    // as it will log an instance of the `Arguments` class
    logan[logLevel](`${className} - ${methodName} - parameters: `, args);
    const result = original.apply(this, arguments);
    logan[logLevel](`${className} - ${methodName} - result: `, result);
    return result;
  };
}
