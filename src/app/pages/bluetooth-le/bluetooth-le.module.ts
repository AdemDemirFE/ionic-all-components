import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoothLEPageRoutingModule } from './bluetooth-le-routing.module';

import { BluetoothLEPage } from './bluetooth-le.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluetoothLEPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [BluetoothLEPage]
})
export class BluetoothLEPageModule {}
