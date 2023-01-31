import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighCharts2Page } from './high-charts2.page';

const routes: Routes = [
  {
    path: '',
    component: HighCharts2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighCharts2PageRoutingModule {}
