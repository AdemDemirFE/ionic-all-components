import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaugeExamplesPage } from './gauge-examples.page';

const routes: Routes = [
  {
    path: '',
    component: GaugeExamplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaugeExamplesPageRoutingModule {}
