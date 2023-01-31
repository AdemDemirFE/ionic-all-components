import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighCharts2PageRoutingModule } from './high-charts2-routing.module';

import { HighCharts2Page } from './high-charts2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighCharts2PageRoutingModule
  ],
  declarations: [HighCharts2Page]
})
export class HighCharts2PageModule {}
