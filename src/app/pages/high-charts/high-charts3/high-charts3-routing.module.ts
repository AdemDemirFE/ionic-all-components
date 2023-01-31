import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighCharts3Page } from './high-charts3.page';

const routes: Routes = [
  {
    path: '',
    component: HighCharts3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighCharts3PageRoutingModule {}
