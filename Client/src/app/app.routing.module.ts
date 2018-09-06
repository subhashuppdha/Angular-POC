import { UserComponent } from './Home/Home.component';
import { LoginComponent } from './login/login.component';
import {Routes,RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth.guard';


const routes: Routes = [
    { path: 'Home', component: UserComponent},
     { path: 'login', component: LoginComponent},
    {path : '', component : LoginComponent}
    
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }