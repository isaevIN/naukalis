import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeRascapComponent } from './home/rascap/rascap.component';
import { HomeResultComponent } from './home/result/result.component';
import { LoginComponent } from './login/login.component';

const itemMainRoutes: Routes = [
  {path: 'rascap', component: HomeRascapComponent},
  {path: 'result', component: HomeResultComponent},
];

const routes: Routes = [
  { path: 'main' , component: HomeComponent, children:itemMainRoutes},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
