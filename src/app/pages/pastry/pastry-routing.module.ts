import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastryPage } from './pastry.page';

const routes: Routes = [
  {
    path: '',
    component: PastryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastryPageRoutingModule {}
