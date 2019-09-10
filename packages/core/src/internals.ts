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
 *
 * @internal
 */
export function createLoganFactory(
  method: LoganLogLevel,
  title: string,
  logLevel: LoganLogLevel,
  console: Partial<Console> | undefined
) {
  if (logLevelValues[method] < logLevelValues[logLevel]) {
    return () => {};
  }

  return (...params: any[]) => {
    const nativeConsole = getNativeConsole(console);
    const digestedParams: [string, ...any[]] = [getTitle(title)];
    for (const param of params) {
      digestedParams.push(formatError(param));
    }
    // This should be used with `apply` instead of direct invokation
    // like `nativeConsole[method](digestedParams)` as it will print array
    if (nativeConsole[method]) {
      nativeConsole[method]!.apply(nativeConsole, digestedParams);
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
