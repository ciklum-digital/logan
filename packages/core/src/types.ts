export const enum LoganLogLevel {
  Log = 'log',
  Info = 'info',
  Warn = 'warn',
  Debug = 'debug',
  Error = 'error'
}

export interface LoganConfig {
  title?: string;
  console?: Partial<Console>;
  logLevel?: LoganLogLevel;
  ignoreLogLevel?: boolean;
}
