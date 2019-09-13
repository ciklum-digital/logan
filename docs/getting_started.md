# Getting started
 
Logan is an extended logging library for your JavaScript app.

## Overview

[there the place for OVERVIEW dateils..]

[please fill it for your module]

## Usage

[there the place for Usage dateils..]

[please fill it for your module]   

## API

See our generated API docs for [@logan/core](api/core) and [@logan/angular](api/angular).

## Examples

There are 2 packages. `@logan/core` can be used with any JavaScript application whether `@logan/angular` can be used with Angular applications. `@logan/core` is pretty simple, given the below code:

```ts
import { Logan, LoganLogLevel } from '@logan/core';

const logan = new Logan({
  title: 'find-user-by-id',
  logLevel: LoganLogLevel.Error
});

export async function findUserById(id: string) {
  try {
    // The below code is used for demonstrating purposes
    await database.findWhere({ id });
  } catch (e) {
    logan.error(e);
    throw e;
  }
}
```
