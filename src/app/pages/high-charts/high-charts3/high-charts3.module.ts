import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighCharts3PageRoutingModule } from './high-charts3-routing.module';

import { HighCharts3Page } from './high-charts3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighCharts3PageRoutingModule
  ],
  declarations: [HighCharts3Page]
})
export class HighCharts3PageModule {}
