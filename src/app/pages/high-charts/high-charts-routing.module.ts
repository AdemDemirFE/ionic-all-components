import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighChartsPage } from './high-charts.page';

const routes: Routes = [
  {
    path: '',
    component: HighChartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighChartsPageRoutingModule {}
