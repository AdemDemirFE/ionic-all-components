import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighCharts1Page } from './high-charts1.page';

const routes: Routes = [
  {
    path: '',
    component: HighCharts1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighCharts1PageRoutingModule {}
