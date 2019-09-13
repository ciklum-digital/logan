import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { Logan } from '@logan/core';

import { NgLogan } from './ng-logan';
import { setNgLogan } from './internals/static-injector';
import { NG_LOGAN_CONFIG, NgLoganConfig } from './internals/internals';

@NgModule()
export class NgLoganModule {
  constructor(injector: Injector) {
    setNgLogan(injector);
  }

  static forRoot(config: NgLoganConfig = {}): ModuleWithProviders<NgLoganModule> {
    if (config.globalTitle) {
      // Set the global title only once during root module bootstrapping
      Logan.setGlobalTitle(config.globalTitle);
      // This has to be done as the `Logan` instance config shouldn't
      // reference the global title
      delete config.globalTitle;
    }

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
