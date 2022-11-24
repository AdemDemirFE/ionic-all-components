import { Component, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {

  peripheral: any = {};
  statusMessage: string;
  device: any;
  constructor(
    public navCtrl: NavController, 
    private ble: BLE,
    private toastCtrl: ToastController,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

    this.device =this.router.getCurrentNavigation().extras.state;
    debugger;   
    this.ble.connect("0C:23:69:19:88:78").subscribe(
      peripheral => this.onConnected(peripheral),
      peripheral => this.onDeviceDisconnected(peripheral)
    );

  
  }

  
  deviceDisconnect() {
    this.ble.disconnect("0C:23:69:19:88:78")
    this.navCtrl.navigateForward('/bluetooth-le');
  }

  onConnected(peripheral) {
    this.ngZone.run(() => {
      this.peripheral = peripheral;
    });
  }

  onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'baglantı kesildi',
      duration: 3000,
      position: 'middle'
    });
    toast.finally();
  }

}