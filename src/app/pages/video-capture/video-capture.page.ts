import { Component, OnInit } from '@angular/core';
//import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';
import { Platform } from '@ionic/angular';

declare var window: any;
interface CaptureVideoOptions {
  limit: number;
  duration: number;
}

@Component({
  selector: 'app-video-capture',
  templateUrl: './video-capture.page.html',
  styleUrls: ['./video-capture.page.scss'],
})
export class VideoCapturePage implements OnInit {


  constructor(
    //private videoCapturePlus: VideoCapturePlus,
    private platform: Platform
  ) { }


  ngOnInit() {
  }


  async recordVideo() {
    try {
      await this.platform.ready();
      const options: CaptureVideoOptions = {
        limit: 1,
        duration: 30
      };
      const videoData = await window.CaptureVideoPlus.captureVideo(options);
      debugger;
      console.log(videoData);
    } catch (error) {
      console.error(error);
    }
  }


}