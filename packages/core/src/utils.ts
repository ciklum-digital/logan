/**
 * @internal
 */
export function isEmptyString(target: unknown): boolean {
  return typeof target === 'string' && !target.trim().length;
}

/**
 * @internal
 */
export function formatError(error: unknown): unknown {
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

/**
 * Determines if we're in the Node environment, `process` or
 * `global` validation is enough
 * @internal
 */
export function isNode(): boolean {
  return typeof process !== 'undefined' && typeof global !== 'undefined';
}

/**
 * @internal
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}
