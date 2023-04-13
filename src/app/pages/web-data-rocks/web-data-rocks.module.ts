import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebDataRocksPageRoutingModule } from './web-data-rocks-routing.module';

import { WebDataRocksPage } from './web-data-rocks.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    WebDataRocksPageRoutingModule
  ],
  declarations: [WebDataRocksPage]
})
export class WebDataRocksPageModule {}
