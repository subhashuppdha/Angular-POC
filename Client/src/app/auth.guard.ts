import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserLogin} from './model/login.model';


@Injectable({
  providedIn: 'root',
  })
export class AuthGuardService implements CanActivate {

  constructor(private UserLogin: UserLogin, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.UserLogin.UserName =="admin" && this.UserLogin.Password =="admin")  {      
      return true;
    } else {      
      this.router.navigate(['/login/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
