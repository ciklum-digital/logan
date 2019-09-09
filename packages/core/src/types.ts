export type LoganLogLevel = keyof Pick<Console, 'log' | 'debug' | 'info' | 'warn' | 'error'>;
/**
 * This type is not semantically same as `LoganLogLevel`
 * @internal
 */
export type LoganConsoleMethod = LoganLogLevel;

export interface LoganConfig {
  title?: string;
  logLevel?: LoganLogLevel;
  ignoreLogLevel?: boolean;
}
