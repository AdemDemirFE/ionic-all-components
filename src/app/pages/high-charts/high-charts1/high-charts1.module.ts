import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighCharts1PageRoutingModule } from './high-charts1-routing.module';

import { HighCharts1Page } from './high-charts1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighCharts1PageRoutingModule
  ],
  declarations: [HighCharts1Page]
})
export class HighCharts1PageModule {}
