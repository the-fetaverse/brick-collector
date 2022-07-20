import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrickViewListComponent } from './components/brick-view-list/brick-view-list.component';
import { BrickEditListComponent } from './brick-edit-list/brick-edit-list.component';
import { BrickAddFormComponent } from './brick-add-form/brick-add-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'view', component: BrickViewListComponent },
  { path: 'edit', component: BrickEditListComponent },
  { path: 'add', component: BrickAddFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
