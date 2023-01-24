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
      icon: 'browser'
    },
    {
      name: 'Range',
      url: '/range',
      icon: 'browser'
    },
    {
      name: 'soundTotext',
      url: '/sound-to-text',
      icon: 'browser'
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
