import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExplorePageComponent
  },
  {
    path: 'categorie',
    component: ExplorePageComponent
  },
  {
    path: '**',
    redirectTo: '/explore'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
