import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebDataRocksPage } from './web-data-rocks.page';

const routes: Routes = [
  {
    path: '',
    component: WebDataRocksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebDataRocksPageRoutingModule {}
