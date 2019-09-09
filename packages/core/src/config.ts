import { LoganLogLevel } from './types';
import { isNode, isBrowser } from './utils';

const nativeConsole = (isNode() && global.console) || window.console;

/**
 * As user is able to provide custom console object that implements `Console`
 * interface that we have to derermine if we have to use native console
 * @internal
 */
export function getNativeConsole(console: Console | undefined): Console {
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
