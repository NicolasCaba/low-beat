import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import(`../tracks/tracks.module`).then(m => m.TracksModule)
  },
  {
    path: 'user',
    loadChildren: () => import(`../user/user.module`).then(m => m.UserModule)
  },
  {
    path: 'explore',
    loadChildren: () => import(`../explore/explore.module`).then(m => m.ExploreModule)
  },
  {
    path: '**',
    redirectTo: '/tracks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
