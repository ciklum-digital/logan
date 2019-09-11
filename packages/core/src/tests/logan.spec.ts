import { Logan } from '../logan';
import { getLogLevel } from '../config';
import { LoganLogLevel } from '../types';

describe('@logan/core', () => {
  const console = global.console;

  Logan.setGlobalTitle('@logan/core global title');

  it('create an instance and log', () => {
    // Arrange
    const spy = jest.spyOn(console, 'log');
    const logan = new Logan({ logLevel: LoganLogLevel.Log });

    // Act
    logan.setTitle('local title');
    logan.log('message');

    try {
      // Assert
      expect(spy).toHaveBeenCalledWith('[@logan/core global title]', 'message');
    } finally {
      spy.mockRestore();
    }
  });

  it('should ignore log level', () => {
    // Arrange
    const spy = jest.spyOn(console, 'log');
    const logan = new Logan({ ignoreLogLevel: true });

    // Act
    logan.setTitle('local title');
    logan.log('message');

    try {
      // Assert
      expect(spy).toHaveBeenCalledWith('[@logan/core global title]', 'message');
    } finally {
      spy.mockRestore();
    }
  });

  it('should set log level from Node environment', () => {
    // Arrange
    process.env.LOG_LEVEL = 'error';
    const spy = jest.spyOn(console, 'error');
    const logan = new Logan();

    // Act
    logan.setTitle('local title');
    logan.error('message');

    try {
      // Assert
      expect(getLogLevel(undefined, undefined)).toEqual('error');
      expect(spy).toHaveBeenCalledWith('[@logan/core global title]', 'message');
    } finally {
      spy.mockRestore();
      delete process.env.LOG_LEVEL;
    }
  });

  it('should set log level from window', () => {
    // Arrange
    global['window'].config = {
      logLevel: 'info'
    };
    const spy = jest.spyOn(console, 'info');
    const logan = new Logan();

    // Act
    logan.setTitle('local title');
    logan.info('message');

    try {
      // Assert
      expect(getLogLevel(undefined, undefined)).toEqual('info');
      expect(spy).toHaveBeenCalledWith('[@logan/core global title]', 'message');
    } finally {
      spy.mockRestore();
      delete global['window'];
    }
  });

  it('should accept custom console', () => {
    // Arrange
    const customConsoleMessage = 'Custom console: ';
    class CustomConsole implements Partial<Console> {
      log(...optionalParams: any[]): void {
        console.log(customConsoleMessage, ...optionalParams);
      }

      debug(...optionalParams: any[]): void {
        console.debug(customConsoleMessage, ...optionalParams);
      }

      info(...optionalParams: any[]): void {
        console.debug(customConsoleMessage, ...optionalParams);
      }

      error(...optionalParams: any[]): void {
        console.debug(customConsoleMessage, ...optionalParams);
      }

      warn(...optionalParams: any[]): void {
        console.debug(customConsoleMessage, ...optionalParams);
      }
    }

    const spy = jest.spyOn(console, 'debug');
    const logan = new Logan({ console: new CustomConsole() });

    // Act
    logan.setTitle('local title');
    logan.debug('message');

    try {
      // Assert
      expect(spy).toHaveBeenCalledWith(
        customConsoleMessage,
        '[@logan/core global title]',
        'message'
      );
    } finally {
      spy.mockRestore();
    }
  });
});
