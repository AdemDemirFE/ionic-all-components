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
      icon: 'apps'
    },
    {
      name: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      name: 'Tiimeline',
      url: '/timeline',
      icon: 'apps'
    },
    {
      name: 'bluetooth',
      url: '/bluetooth-le',
      icon: 'apps'
    },
    {
      name: 'pastry',
      url: '/pastry',
      icon: 'apps'
    },
    {
      name: 'fluid',
      url: '/fluid',
      icon: 'apps'
    },
    {
      name: 'innAppBrowser',
      url: '/in-app-browser',
      icon: 'browser'
    },
    {
      name: 'Range',
      url: '/range',
      icon: 'apps'
    },
    {
      name: 'soundTotext',
      url: '/sound-to-text',
      icon: 'apps'
    },
    {
      name: 'buttons',
      url: '/buttons',
      icon: 'apps'
    }
    ]
  }

}
