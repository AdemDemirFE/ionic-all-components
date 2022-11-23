import { Component, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { LoadingController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-bluetooth-le',
  templateUrl: './bluetooth-le.page.html',
  styleUrls: ['./bluetooth-le.page.scss'],
})
export class BluetoothLEPage implements OnInit {

  devices: any[] = [];

  constructor(
    private platform: Platform,
    private ble: BLE,
    private loadingCrl: LoadingController
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      if (this.platform.is('android') || this.platform.is('ios')) {
        if (this.platform.is('android')) {
          this.ble.enable().then(() => this.scan());
        } else {
          this.scan();
        }
      }
    });
  }

  scan() {
    console.log("sssas")
    debugger;
    this.loadingCrl.create({ message: 'Scanning...' }).then(loading => {
      loading.present();
      console.log('Scanning...');
      this.ble.scan([], 5).subscribe(device => {
        console.log(JSON.stringify(device));
        this.devices.push(device);
        loading.dismiss();
      });
    });
  }

}