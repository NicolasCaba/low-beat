import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { UserRoutingModule } from './user-routing.module';
import { AddTrackPageComponent } from './pages/add-track-page/add-track-page.component';
import { TracksListPageComponent } from './pages/tracks-list-page/tracks-list-page.component';
import { HomeUserPageComponent } from './pages/home-user-page/home-user-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';


@NgModule({
  declarations: [
    AddTrackPageComponent,
    TracksListPageComponent,
    HomeUserPageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
