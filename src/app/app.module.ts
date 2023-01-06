import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from 'src/translate-config.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineTimeComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline/timeline.component';
import { BLE } from '@ionic-native/ble/ngx';
import { Device } from '@ionic-native/device/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { WebdatarocksPivotModule } from 'ng-webdatarocks';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
  ],
  
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    WebdatarocksPivotModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
  ],
  providers: [
    BLE,
    Device,
    TranslateConfigService,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
