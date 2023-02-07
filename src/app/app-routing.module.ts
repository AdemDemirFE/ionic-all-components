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
    path: 'sms-dogrula',
    loadChildren: () => import('./sms-dogrula/sms-dogrula.module').then( m => m.SmsDogrulaPageModule)
  },
  {
    path: 'sms-verification',
    loadChildren: () => import('./sms-verification/sms-verification.module').then( m => m.SmsVerificationPageModule)
  },
  {
    path: 'gauge-examples',
    loadChildren: () => import('./pages/gauge-examples/gauge-examples.module').then( m => m.GaugeExamplesPageModule)
  },
  {
    path: 'gauge2',
    loadChildren: () => import('./pages/gauge-examples/gauge2/gauge2.module').then( m => m.Gauge2PageModule)
  },
  {
    path: 'high-charts',
    loadChildren: () => import('./pages/high-charts/high-charts.module').then( m => m.HighChartsPageModule)
  },
  {
    path: 'high-charts2',
    loadChildren: () => import('./pages/high-charts/high-charts2/high-charts2.module').then( m => m.HighCharts2PageModule)
  },
  {
    path: 'high-charts3',
    loadChildren: () => import('./pages/high-charts/high-charts3/high-charts3.module').then( m => m.HighCharts3PageModule)
  },

  {
    path: 'high-charts1',
    loadChildren: () => import('./pages/high-charts/high-charts1/high-charts1.module').then( m => m.HighCharts1PageModule)
  },
  {
    path: 'video-capture',
    loadChildren: () => import('./pages/video-capture/video-capture.module').then( m => m.VideoCapturePageModule)
  },
  {
    path: 'timeline2',
    loadChildren: () => import('./pages/timeline2/timeline2.module').then( m => m.Timeline2PageModule)
  }

















];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
