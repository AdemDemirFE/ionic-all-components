import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InAppBrowserPageRoutingModule } from './in-app-browser-routing.module';

import { InAppBrowserPage } from './in-app-browser.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InAppBrowserPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [InAppBrowserPage]
})
export class InAppBrowserPageModule {}
