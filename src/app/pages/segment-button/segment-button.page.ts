import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment-button',
  templateUrl: './segment-button.page.html',
  styleUrls: ['./segment-button.page.scss'],
})
export class SegmentButtonPage implements OnInit {

  segment = "1";

  constructor() { }

  ngOnInit() {
  }

  segmentChange() {
    if (this.segment == '1') {

    } else if (this.segment == '2') {

    } else if (this.segment == '3') {

    } 
  }

}
