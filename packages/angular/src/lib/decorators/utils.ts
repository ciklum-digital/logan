import { LoganLogLevel } from '@logan/core';

import { getNgLogan } from '../internals/static-injector';

export function proxyMethod(
  logLevel: LoganLogLevel,
  className: string,
  methodName: string,
  original: Function
) {
  return function(this: any, ...args: any) {
    const logan = getNgLogan();
    // It's important to use `args` except of `arguments`
    // as it will log an instance of the `Arguments` class
    logan[logLevel](`${className} - ${methodName} - parameters: `, args);
    const result = original.apply(this, arguments);
    logan[logLevel](`${className} - ${methodName} - result: `, result);
    return result;
  };
}
