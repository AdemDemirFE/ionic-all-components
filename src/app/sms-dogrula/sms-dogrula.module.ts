import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmsDogrulaPageRoutingModule } from './sms-dogrula-routing.module';

import { SmsDogrulaPage } from './sms-dogrula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmsDogrulaPageRoutingModule
  ],
  declarations: [SmsDogrulaPage]
})
export class SmsDogrulaPageModule {}
