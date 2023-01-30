import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighChartsPageRoutingModule } from './high-charts-routing.module';

import { HighChartsPage } from './high-charts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighChartsPageRoutingModule
  ],
  declarations: [HighChartsPage]
})
export class HighChartsPageModule {}
