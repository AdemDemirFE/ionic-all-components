import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiseaseDiagnosisPage } from './disease-diagnosis.page';

const routes: Routes = [
  {
    path: '',
    component: DiseaseDiagnosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiseaseDiagnosisPageRoutingModule {}
