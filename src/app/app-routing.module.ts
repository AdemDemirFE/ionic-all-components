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
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
