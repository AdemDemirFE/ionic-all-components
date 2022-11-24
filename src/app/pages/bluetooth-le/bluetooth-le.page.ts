import { Component, OnInit, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { LoadingController, Platform, NavController } from '@ionic/angular';
import { DetailPage } from './detail/detail.page';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-bluetooth-le',
  templateUrl: './bluetooth-le.page.html',
  styleUrls: ['./bluetooth-le.page.scss'],
})
export class BluetoothLEPage implements OnInit {

  devices: any[] = [];
  bluetoothCheck = false;
  constructor(
    private platform: Platform,
    private ble: BLE,
    private loadingCrl: LoadingController,
    private ngZone: NgZone,
    public navCtrl:NavController,
    public router: Router
    ) { }

    bluetoothScan() {
      
      this.platform.ready().then(() => {
        if (this.platform.is('android') || this.platform.is('ios')) {
          if (this.platform.is('android') && this.bluetoothCheck == true) {
            this.ble.enable().then(() => this.scan());
          } else {
            this.scan();
          }
        }
      });
    }
  
  scan() {
    debugger;
    this.loadingCrl.create({ message: 'Scanning...' }).then(loading => {
      loading.present();
      this.ble.scan([], 5).subscribe(device => {
        this.devices.push(device);
        loading.dismiss();
      });
    });
  }

  ngOnInit() {
  }

  deviceSelected(device) {
    console.log(JSON.stringify(device) + ' selected');
    this.navCtrl.navigateForward('detail', { state: { device} } );
  }


  goToDetails(device) {
    debugger;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        device: device,
      }
    }
    this.navCtrl.navigateForward('/detail', navigationExtras);
  }

  
}