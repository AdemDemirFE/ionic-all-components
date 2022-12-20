import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoundToTextPage } from './sound-to-text.page';

const routes: Routes = [
  {
    path: '',
    component: SoundToTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoundToTextPageRoutingModule {}
