import { Component, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {

  peripheral: any = {};
  statusMessage: string;
  
  constructor(
    public navCtrl: NavController, 
    private ble: BLE,
    private toastCtrl: ToastController,
    private ngZone: NgZone
  ) {

    debugger;
    this.ble.connect("0C:23:69:19:88:78").subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)
    );

  }
  onConnected(peripheral) {
    this.ngZone.run(() => {
      this.peripheral = peripheral;
    });
  }

  onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'The peripheral unexpectedly disconnected',
      duration: 3000,
      position: 'middle'
    });
    toast.finally();
  }

}