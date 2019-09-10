import { LoganLogLevel } from './types';
import { isNode, isBrowser } from './utils';

const nativeConsole = (isNode() && global.console) || window.console;

/**
 * As user is able to provide custom console object, that implements `Console`
 * interface, then we have to derermine if there is a need to use the native console
 * @internal
 */
export function getNativeConsole(console: Partial<Console> | undefined): Partial<Console> {
  return console || nativeConsole;
}

/**
 * @internal
 */
export function getLogLevel(
  ignoreLogLevel: boolean | undefined,
  logLevel: LoganLogLevel | undefined
): LoganLogLevel {
  if (ignoreLogLevel) {
    return LoganLogLevel.Debug;
  }

  if (logLevel) {
    return logLevel;
  }

  const nodeLogLevel = isNode() && process.env.LOG_LEVEL;
  // It's safer to type cast to `any` than augmenting
  // global `Window` interface
  const browserLogLevel = isBrowser() && (window as any).config && (window as any).config.logLevel;
  return nodeLogLevel || browserLogLevel || LoganLogLevel.Debug;
}
