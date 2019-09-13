> Extended logging library for you JavaScript app

## Table of contents
1. [Installation and usage](#installation-and-usage)
2. [Log levels](#log-levels)
3. [Usage and API](#usage-and-api)

## Installation and usage

To install `@logan/core` package run the following command:

```bash
npm i @logan/core
# Or if you use yarn
yarn add @logan/core
```

Now you're able to use the `Logan` class:

```ts
import { Logan } from '@logan/core';
```

## Log levels

`Logan` supports next types of log levels:
* log
* info
* warn
* debug
* error

Log level can be provided via:
* `process.env.LOG_LEVEL` environment variable for Node.js applications
* `window.config.logLevel` for browser applicaions

Log level determines what messages should be displayed. For example, if the current log level is set to `'info'` (`window.config.logLevel = 'info'`) then only `info`, `warn` and `error` messages will be displayed. However, `log` and `debug` messages will be ignored.

Log levels are exposed publicly as TypeScript `enum`:

```ts
import { LoganLogLevel } from '@logan/core';

// Node.js
process.env.LOG_LEVEL = LoganLogLevel.Debug;
// Browser
window.config = {
  logLevel: LoganLogLevel.Debug
};
```

## Usage and API

Let's look at the below examples of the `Logan` class usage:

```ts
import { Logan } from '@logan/core';

const logan = new Logan();
```

Set the global title for your application:

```ts
Logan.setGlobalTitle('auto-parts-store');
```

Set the local instance title:

```ts
const logan = new Logan({ title: 'basket-module' });

// Log output will consist of the global and local titles:
// [auto-parts-store::basket-module]
```

There are five methods to output logs:
* `logan.log`
* `logan.info`
* `logan.warn`
* `logan.debug`
* `logan.error`

**Note**: Starting with Chromium 58 `logan.debug` method only appears in Chromium browser
consoles when level "Verbose" is selected (not set by default).  

Message string and optional argument(s) of any type should be passed to these methods:
```ts
logan.info('Publish', { channelHeader, listeners: listeners.length, message });

// Log output
// [auto-parts-store::basket-module] Publish > { channelHeader: "@auto-parts-store:get-transmissions:success", listeners: 0, message: Array(10) }
```

### Ignoring log level

You can omit specifying `process.env.LOG_LEVEL` or `window.config.logLevel` properties. You can pass the `ignoreLogLevel` when creating `Logan` instance:

```ts
const logan = new Logan({ ignoreLogLevel: true });
```

It's also possible to pass custom log level:

### Local log level

```ts
const logan = new Logan({ logLevel: LoganLogLevel.Warn });
```

### Custom console object

You can provide custom console object. That's neat if you want to log data with colors. Given the following example:

```ts
class ConsoleWithColors implements Partial<Console> {
  log(params: [string, ...any[]]): void {
    const [title, ...digestedParams] = params;

    console.log(
      `%c ${title}`,
      'font-weight: bold; font-size: 16px; color: #0e66ff',
      ...digestedParams
    );
  }
}

const logan = new Logan({ console: new ConsoleWithColors() });
```

### Disable logging

You can disable logging in the production environment. This can be done by providing the `disabled` option:

```ts
const logan = new Logan({ disabled: !!process.env.PRODUCTION });
```
