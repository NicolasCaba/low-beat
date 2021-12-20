import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AddTrackPageComponent } from './pages/add-track-page/add-track-page.component';
import { TracksListPageComponent } from './pages/tracks-list-page/tracks-list-page.component';
import { HomeUserPageComponent } from './pages/home-user-page/home-user-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeUserPageComponent
  },
  {
    path: 'create',
    component: AddTrackPageComponent
  },
  {
    path: 'update-delete',
    component: TracksListPageComponent
  },
  {
    path: 'update-delete/update',
    component: EditPageComponent
  },
  {
    path: '**',
    redirectTo: '/user'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
