import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { LoganConfig } from '@logan/core';

import { NgLogan } from './ng-logan';
import { NG_LOGAN_CONFIG } from './internals/internals';
import { setNgLogan } from './internals/static-injector';

@NgModule()
export class NgLoganModule {
  constructor(injector: Injector) {
    setNgLogan(injector);
  }

  static forRoot(config: LoganConfig = {}): ModuleWithProviders<NgLoganModule> {
    return {
      ngModule: NgLoganModule,
      providers: [
        NgLogan,
        {
          provide: NG_LOGAN_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
