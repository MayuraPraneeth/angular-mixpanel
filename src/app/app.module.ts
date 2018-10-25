import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MixpanelService } from './shared/services/mixpanel.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MixpanelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
