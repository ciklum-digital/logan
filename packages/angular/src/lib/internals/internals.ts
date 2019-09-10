import { InjectionToken } from '@angular/core';
import { LoganConfig } from '@logan/core';

/**
 * @internal
 */
export const NG_LOGAN_CONFIG = new InjectionToken<LoganConfig>('NG_LOGAN_CONFIG');

/**
 * This symbol is used inside instances and protects the user
 * from unintentional access to this property
 * @internal
 */
export const LOGAN_KEY: unique symbol = Symbol('__logan');
