import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastryPageRoutingModule } from './pastry-routing.module';

import { PastryPage } from './pastry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastryPageRoutingModule
  ],
  declarations: [PastryPage]
})
export class PastryPageModule {}
