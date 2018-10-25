/**  mixpanel.service
 *   Created by Mayura Wijewickrama on 23/10/18
 */

import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';
import { environment } from '../../../environments/environment';

@Injectable()
export class MixpanelService {
  private mixpanelToken: string;

  constructor() {
    this.mixpanelToken = environment.mixpanelToken;

    this.init();
  }

  /**
   * Initialize mixpanel.
   *
   * @param {string} userToken
   * @memberof MixpanelService
   */
  init(): void {
    mixpanel.init(this.mixpanelToken);
  }

  identify(alias: String) {
    mixpanel.identify(alias);
  }

  /**
   * Push new action to mixpanel.
   *
   * @param {string} id Name of the action to track.
   * @param {*} [action={}] Actions object with custom properties.
   * @memberof MixpanelService
   */
  track(id: string, action: any = {}): void {
    mixpanel.track(id, action);
  }

  // Call this method only once in user lifecycle
  createAlias(alias: String) {
    mixpanel.alias(alias, mixpanel.distinctId);
  }

  logout() {
    mixpanel.reset();
  }

  setup() {
    // TODO: Remove before production
    mixpanel.loggingEnabled = false;
    this.setSuperProperties({ Platform: 'mobile' });
  }

  setSuperProperties(properties) {
    mixpanel.registerSuperProperties(properties);
  }

  sendEvent(event: String, properties?) {
    if (properties) {
      mixpanel.track(event, properties);
    } else {
      this.trackEvent(event);
    }
  }

  trackEvent(event: String) {
    mixpanel.track(event);
  }
}
