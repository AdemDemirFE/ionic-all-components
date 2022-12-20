import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoundToTextPageRoutingModule } from './sound-to-text-routing.module';

import { SoundToTextPage } from './sound-to-text.page';
import { Media } from '@ionic-native/media/ngx';
import { HttpClient } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClient,
    SoundToTextPageRoutingModule
  ],
  declarations: [SoundToTextPage]
})
export class SoundToTextPageModule {}
