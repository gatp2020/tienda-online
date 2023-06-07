import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegistroComponent } from './components/registro/registro.component'; 



const routes: Routes = [
  
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full',
    //canActivate: [AuthGuard]
  },  
  {
    path: 'login',
    component: LoginComponent
  }
  ,  
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
