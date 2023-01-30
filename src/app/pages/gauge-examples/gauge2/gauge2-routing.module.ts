import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gauge2Page } from './gauge2.page';

const routes: Routes = [
  {
    path: '',
    component: Gauge2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gauge2PageRoutingModule {}
