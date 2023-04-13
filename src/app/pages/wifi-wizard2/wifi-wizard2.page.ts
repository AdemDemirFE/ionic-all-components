import { Component } from '@angular/core';
import { WifiWizard2 } from '@ionic-native/wifi-wizard-2/ngx';

@Component({
  selector: 'app-wifi-wizard2',
  templateUrl: './wifi-wizard2.page.html',
  styleUrls: ['./wifi-wizard2.page.scss'],
})
export class WifiWizard2Page {

  wifiList: any[];

  constructor(private wifiWizard2: WifiWizard2) {}

  scanWifi() {
    
    debugger;
    this.wifiWizard2.startScan()
      .then((result) => {
        this.wifiList = result;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  connectToWifi(wifi) {
    debugger;
    const ssid = wifi.SSID;
    const password = false;
    const capabilities = wifi.capabilities;

    this.wifiWizard2.connect(ssid, password, capabilities)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}