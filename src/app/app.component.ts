import { Component } from '@angular/core';
import { MixpanelService } from './shared/services/mixpanel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private mixpanelService: MixpanelService) {
    this.mixpanelService.identify('mayurawijawickrama@gmail.com');

    this.mixpanelService.track('Page loaded', {
      custom: 'property'
    });
  }
}
