import { Injector } from '@angular/core';

import { NgLogan } from '../ng-logan';

// This algorithm is originally used by Angular team
let injector: Injector | null = null;

/**
 * @internal
 */
export function setInjector(parentInjector: Injector): void {
  injector = parentInjector;
}

/**
 * @internal
 */
export function getNgLogan(): never | NgLogan {
  if (injector === null) {
    throw new Error('Import the "NgLoganModule" before using "@logan/angular" package');
  }

  return injector.get<NgLogan>(NgLogan);
}
