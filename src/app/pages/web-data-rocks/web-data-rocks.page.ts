import { Component, OnInit, ViewChild } from '@angular/core';
import { WebdatarocksComponent } from 'ng-webdatarocks';

@Component({
  selector: 'app-web-data-rocks',
  templateUrl: './web-data-rocks.page.html',
  styleUrls: ['./web-data-rocks.page.scss'],
})
export class WebDataRocksPage implements OnInit {

  @ViewChild('pivot1') child: WebdatarocksComponent;

  constructor() { }

  ngOnInit() {
  }

}
