import { getLogLevel } from './config';
import { LoganConfig, LoganLogLevel } from './types';
import { setGlobalTitle, getTitle, createLoganFactory } from './internals';

const methods = [
  LoganLogLevel.Log,
  LoganLogLevel.Info,
  LoganLogLevel.Warn,
  LoganLogLevel.Debug,
  LoganLogLevel.Error
];

/**
 * This class has to be lightweight and should not expose any private API
 * in its prototype methods
 */
export class Logan {
  /**
   * Static properties has to reference external functions if they don't
   * collaborate with `this` property. This can benefit more readily from
   * tree shaking
   */
  static setGlobalTitle: (globalTitle: string) => void = setGlobalTitle;

  /**
   * This should be a class property as there can be
   * multiple instances of the `Logan`
   */
  private title = this.config.title || '';

  constructor(protected config: LoganConfig = {}) {
    const logLevel = getLogLevel(config.ignoreLogLevel, config.logLevel);

    for (const method of methods) {
      this[method] = createLoganFactory(method, this.title, logLevel, config.console);
    }
  }

  /**
   * These properties will be created dynamically
   */
  log!: (message?: any, ...optionalParams: any[]) => void;
  info!: (message?: any, ...optionalParams: any[]) => void;
  warn!: (message?: any, ...optionalParams: any[]) => void;
  error!: (message?: any, ...optionalParams: any[]) => void;
  debug!: (message?: any, ...optionalParams: any[]) => void;

  setTitle(title: string): void {
    this.title = title;
  }

  getTitle(): string {
    return getTitle(this.title);
  }
}
