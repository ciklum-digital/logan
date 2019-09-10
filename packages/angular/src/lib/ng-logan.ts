import { Injectable, Inject } from '@angular/core';
import { Logan, LoganConfig } from '@logan/core';

import { NG_LOGAN_CONFIG } from './internals/internals';

@Injectable()
export class NgLogan extends Logan {
  constructor(@Inject(NG_LOGAN_CONFIG) config: LoganConfig) {
    super(config);
  }

  createLogan(config?: LoganConfig): Logan {
    return new Logan({ ...this.config, ...config });
  }
}
