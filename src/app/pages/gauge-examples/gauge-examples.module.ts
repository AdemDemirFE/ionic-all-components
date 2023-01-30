import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaugeExamplesPageRoutingModule } from './gauge-examples-routing.module';

import { GaugeExamplesPage } from './gauge-examples.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaugeExamplesPageRoutingModule
  ],
  declarations: [GaugeExamplesPage]
})
export class GaugeExamplesPageModule {}
