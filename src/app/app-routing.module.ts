import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddApiComponent } from './add-api/add-api.component';
import { FindApiComponent } from './find-api/find-api.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'addapi', component: AddApiComponent
  },
  {
    path: 'findapi', component: FindApiComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
