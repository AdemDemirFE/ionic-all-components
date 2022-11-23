import { Component, OnInit, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { LoadingController, Platform, NavController } from '@ionic/angular';
import { DetailPage } from './detail/detail.page';
import { Router } from '@angular/router';
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
    private loadingCrl: LoadingController,
    private ngZone: NgZone,
    public navCtrl:NavController,
    public router: Router
    ) { }


  Scan(){
    this.devices = [];
    this.ble.scan([],15).subscribe(
      device => this.onDeviceDiscovered(device)
    );
  }
  onDeviceDiscovered(device){
    console.log('Discovered' + JSON.stringify(device,null,2));
    this.ngZone.run(()=>{
      this.devices.push(device)
      console.log(device)
    })
  }



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


  deviceSelected(device) {
    console.log(JSON.stringify(device) + ' selected');
    this.navCtrl.navigateForward('detail', { state: { device} } );
  }


  goToDetails(device) {
    this.router.navigate(['/detail', device]);
  }

  
}