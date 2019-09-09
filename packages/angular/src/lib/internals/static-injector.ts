import { Injector, InjectFlags } from '@angular/core';

import { NgLogan } from '../ng-logan';

// The `NgLogan` instance shouldn't be stored in any static
// class properties and exposed to developer! This should be a local variable.
// Such classes are treated as "service locators" that kind of anti-patterns
let ngLogan: NgLogan | null = null;

/**
 * @internal
 */
export function setNgLogan(injector: Injector): void {
  ngLogan = injector.get<NgLogan | null>(NgLogan, null, InjectFlags.Self);
}

/**
 * @internal
 */
export function getNgLogan(): never | NgLogan {
  if (ngLogan === null) {
    throw new Error('Import the "NgLoganModule" before using "@logan/angular" package');
  }

  return ngLogan;
}
