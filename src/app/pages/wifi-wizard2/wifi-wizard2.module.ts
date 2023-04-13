import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WifiWizard2PageRoutingModule } from './wifi-wizard2-routing.module';

import { WifiWizard2Page } from './wifi-wizard2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WifiWizard2PageRoutingModule
  ],
  declarations: [WifiWizard2Page]
})
export class WifiWizard2PageModule {}
