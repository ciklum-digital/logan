import { LoganLogLevel } from './types';
import { getNativeConsole } from './config';
import { isEmptyString, formatError, isNode } from './utils';

const logLevelValues = {
  log: 20,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50
};

/**
 * This should be stored internally and shouldn't be exposed
 * to the developer
 */
let globalTitle = isNode() ? '' : window.name;

/**
 * @internal
 */
export function setGlobalTitle(title: string): void {
  globalTitle = title;
}

/**
 * @internal
 */
export function createLoganFactory(
  method: LoganLogLevel,
  title: string,
  logLevel: LoganLogLevel,
  console: Partial<Console> | undefined,
  disabled: boolean | undefined
) {
  if (logLevelValues[method] < logLevelValues[logLevel] || disabled) {
    return () => {};
  }

  return (...params: any[]) => {
    const nativeConsole = getNativeConsole(console);
    const digestedParams: [string, ...any[]] = [getTitle(title)];
    for (const param of params) {
      digestedParams.push(formatError(param));
    }

    if (typeof nativeConsole[method] === 'function') {
      nativeConsole[method]!(...digestedParams);
    }
  };
}

/**
 * @internal
 */
export function getTitle(title: string): string {
  if (isEmptyString(globalTitle)) {
    title = `[${title}]`;
  } else if (isEmptyString(title)) {
    title = `[${globalTitle}]`;
  } else {
    title = `[${globalTitle}::${title}]`;
  }

  return title;
}
