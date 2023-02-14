import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  selectedLanguage:string;
  menuItems: any = [];

  constructor(
    public translateService: TranslateService,
    public translateConfigService: TranslateConfigService,
    public router: Router
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  ngOnInit(){
    this.menuItems = [
    {
      name: 'Home',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      name: 'Segment Button',
      url: '/segment-button',
      icon: 'home'
    },
    {
      name: 'Login',
      url: '/login',
      icon: 'person'
    },
    {
      name: 'Ion Card',
      url: '/ion-card',
      icon: 'key'
    },
    {
      name: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      name: 'Tiimeline',
      url: '/timeline',
      icon: 'time'
    },
    {
      name: 'bluetooth',
      url: '/bluetooth-le',
      icon: 'time'
    },
    {
      name: 'pastry',
      url: '/pastry',
      icon: 'time'
    },
    {
      name: 'fluid',
      url: '/fluid',
      icon: 'time'
    },
    {
      name: 'innAppBrowser',
      url: '/in-app-browser',
      icon: 'star'
    },
    {
      name: 'Range',
      url: '/range',
      icon: 'star'
    },
    {
      name: 'soundTotext',
      url: '/sound-to-text',
      icon: 'star'
    },
    {
      name: 'gauge',
      url: '/gauge-examples',
      icon: 'star'
    },
    {
      name: 'gauge2',
      url: '/gauge2',
      icon: 'star'
    },
    {
      name: 'highCharts',
      url: '/high-charts',
      icon: 'star'
    },
    {
      name: 'highCharts2',
      url: '/high-charts2',
      icon: 'star'
    },
    {
      name: 'highCharts3',
      url: '/high-charts3',
      icon: 'star'
    },
    {
      name: 'highCharts1',
      url: '/high-charts1',
      icon: 'star'
    },
    {
      name: 'video-capture',
      url: '/video-capture',
      icon: 'star'
    },
    {
      name: 'timeline2',
      url: '/timeline2',
      icon: 'star'
    },
    {
      name: 'Barcode Scan',
      url: '/barcode-scanner',
      icon: 'star'
    }
    ]
  }


  
  onClick(event:any){
    debugger;
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    }
    else{
      document.body.setAttribute('color-theme', 'light');
    }
  }

   colorTest(systemInitiatedDark:any) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('color-theme', 'dark');		
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  
}
