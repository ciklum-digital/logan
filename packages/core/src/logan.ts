import { LoganConfig, LoganConsoleMethod } from './types';
import { setGlobalTitle, getLogLevel, getTitle, createConsoleMethod } from './internals';

const methods: LoganConsoleMethod[] = ['log', 'debug', 'info', 'warn', 'error'];

/**
 * This class has to be lightweight and should not expose any private API
 * in its prototype methods
 */
export class Logan {
  static setGlobalTitle: (glotbalTitle: string) => void = setGlobalTitle;

  /**
   * This should be a class property as there can be
   * multiple instances of the `LoggerService`
   */
  private title = this.config.title || '';

  constructor(protected config: LoganConfig = {}) {
    for (const method of methods) {
      this[method] = createConsoleMethod(method, this.title, getLogLevel(config));
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
