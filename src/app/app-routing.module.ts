import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'segment-button',
    loadChildren: () => import('./pages/segment-button/segment-button.module').then( m => m.SegmentButtonPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./pages/timeline/timeline.module').then( m => m.TimelinePageModule)
  },
  {
    path: 'bluetooth-le',
    loadChildren: () => import('./pages/bluetooth-le/bluetooth-le.module').then( m => m.BluetoothLEPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/bluetooth-le/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'pastry',
    loadChildren: () => import('./pages/pastry/pastry.module').then( m => m.PastryPageModule)
  },
  {
    path: 'bubble',
    loadChildren: () => import('./pages/bubble/bubble.module').then( m => m.BubblePageModule)
  },
  {
    path: 'fluid',
    loadChildren: () => import('./pages/fluid/fluid.module').then( m => m.FluidPageModule)
  },
  {
    path: 'in-app-browser',
    loadChildren: () => import('./pages/in-app-browser/in-app-browser.module').then( m => m.InAppBrowserPageModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./pages/range/range.module').then( m => m.RangePageModule)
  },
  {
    path: 'sound-to-text',
    loadChildren: () => import('./pages/sound-to-text/sound-to-text.module').then( m => m.SoundToTextPageModule)
  },
  {
    path: 'disease-diagnosis',
    loadChildren: () => import('./pages/disease-diagnosis/disease-diagnosis.module').then( m => m.DiseaseDiagnosisPageModule)
  },  {
    path: 'web-data-rocks',
    loadChildren: () => import('./web-data-rocks/web-data-rocks.module').then( m => m.WebDataRocksPageModule)
  },
  {
    path: 'sms-dogrula',
    loadChildren: () => import('./sms-dogrula/sms-dogrula.module').then( m => m.SmsDogrulaPageModule)
  }








];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
