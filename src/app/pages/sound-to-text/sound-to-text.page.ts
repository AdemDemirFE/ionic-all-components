import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-sound-to-text',
  templateUrl: './sound-to-text.page.html',
  styleUrls: ['./sound-to-text.page.scss'],
})
export class SoundToTextPage {

  private audio: MediaObject;

  constructor(private media: Media) {}

  startRecording() {
    this.audio = this.media.create('my_audio.mp3');
    this.audio.startRecord();
  }

  stopRecording() {
    this.audio.stopRecord();
    this.audio.release();
  }
}
