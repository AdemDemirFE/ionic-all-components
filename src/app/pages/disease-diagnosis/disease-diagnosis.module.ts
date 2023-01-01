import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiseaseDiagnosisPageRoutingModule } from './disease-diagnosis-routing.module';

import { DiseaseDiagnosisPage } from './disease-diagnosis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiseaseDiagnosisPageRoutingModule
  ],
  declarations: [DiseaseDiagnosisPage]
})
export class DiseaseDiagnosisPageModule {}
