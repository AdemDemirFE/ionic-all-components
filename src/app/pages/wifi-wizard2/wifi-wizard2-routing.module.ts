import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WifiWizard2Page } from './wifi-wizard2.page';

const routes: Routes = [
  {
    path: '',
    component: WifiWizard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WifiWizard2PageRoutingModule {}
