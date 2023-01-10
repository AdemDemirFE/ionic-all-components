import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmsDogrulaPage } from './sms-dogrula.page';

const routes: Routes = [
  {
    path: '',
    component: SmsDogrulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmsDogrulaPageRoutingModule {}
