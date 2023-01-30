import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gauge2PageRoutingModule } from './gauge2-routing.module';

import { Gauge2Page } from './gauge2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gauge2PageRoutingModule
  ],
  declarations: [Gauge2Page]
})
export class Gauge2PageModule {}
