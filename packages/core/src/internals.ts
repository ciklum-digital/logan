import { LoganLogLevel, LoganConsoleMethod, LoganConfig } from './types';

const isNode = typeof process !== 'undefined' && typeof global !== 'undefined';
const isBrowser = typeof window !== 'undefined';
const nativeConsole = (isNode && global.console) || window.console;

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
let globalTitle = isNode ? '' : window.name;

/**
 * @internal
 */
export function setGlobalTitle(title: string): void {
  globalTitle = title;
}

/**
 * @internal
 */
export function getLogLevel({ ignoreLogLevel, logLevel }: LoganConfig = {}): LoganLogLevel {
  if (ignoreLogLevel) {
    return 'debug';
  }

  if (logLevel) {
    return logLevel;
  }

  const nodeLogLevel = isNode && process.env.LOG_LEVEL;
  // It's safer to type cast to `any` than augmenting
  // global `Window` interface
  const browserLogLevel = isBrowser && (window as any).config && (window as any).config.logLevel;
  return nodeLogLevel || browserLogLevel || 'debug';
}

/**
 * @internal
 */
export function createConsoleMethod(
  method: LoganConsoleMethod,
  title: string,
  logLevel: LoganLogLevel
) {
  if (logLevelValues[method] < logLevelValues[logLevel]) {
    return () => {};
  }

  return (...params: any[]) => {
    const digestedParams: any[] = [getTitle(title)];
    for (const param of params) {
      digestedParams.push(formatError(param));
    }
    nativeConsole[method](digestedParams);
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

/**
 * @internal
 */
function isEmptyString(target: unknown): boolean {
  return typeof target === 'string' && !target.trim().length;
}

/**
 * @internal
 */
function formatError(error: unknown): unknown {
  if (!(error instanceof Error)) {
    return error;
  }

  if (error.stack) {
    error =
      error.message && error.stack.indexOf(error.message) === -1
        ? `Error: ${error.message}\n${error.stack}`
        : error.stack;
  }

  return error;
}
