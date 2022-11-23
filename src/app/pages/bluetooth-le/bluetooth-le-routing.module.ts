import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluetoothLEPage } from './bluetooth-le.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothLEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluetoothLEPageRoutingModule {}
