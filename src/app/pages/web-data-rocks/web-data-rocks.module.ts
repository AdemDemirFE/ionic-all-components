import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebDataRocksPageRoutingModule } from './web-data-rocks-routing.module';

import { WebDataRocksPage } from './web-data-rocks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebDataRocksPageRoutingModule
  ],
  declarations: [WebDataRocksPage]
})
export class WebDataRocksPageModule {}
