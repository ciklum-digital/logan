import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { LoganConfig } from '@logan/core';

import { NG_LOGAN_CONFIG } from './internals/internals';
import { setInjector } from './internals/static-injector';

@NgModule()
export class NgLoganModule {
  constructor(injector: Injector) {
    setInjector(injector);
  }

  static forRoot(config: LoganConfig = {}): ModuleWithProviders<NgLoganModule> {
    return {
      ngModule: NgLoganModule,
      providers: [
        {
          provide: NG_LOGAN_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
