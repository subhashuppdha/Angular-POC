import { Component, OnInit } from '@angular/core';
import {Routes,RouterModule, Router, ActivatedRoute} from '@angular/router'
import { AuthGuardService } from '../auth.guard';
import {UserLogin} from '../model/login.model';
import {LoginService} from '../services/login.service';
import {IUserLogin} from '../model/login.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  User:UserLogin=
{
  UserName:null,
  Password:null,
  UserType:null,
  IsActive:null
}
UserList:IUserLogin[];
  constructor(private router : Router, private route: ActivatedRoute,private svc:LoginService, private toastr: ToastrService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //this.svc.getUser().subscribe(data=> this.UserList=data);
    this.svc.getUser().subscribe(data=>{
      this.UserList=data.recordsets
    });
  }

  login() : void {
    var isUserLogin=false;
    for (let item of this.UserList) {
      for (var i = 0; this.UserList.length >= i; i++) {
        if(this.User.UserName.toLocaleLowerCase().trim() == item[i].UserName && this.User.Password.toLocaleLowerCase().trim() == item[i].Password){
          this.router.navigate(['/Home']);
          isUserLogin=true;
         }
      }
    }
   if(!isUserLogin) {
    isUserLogin=false;      
      this.toastr.error("Invalid credentials!","Login");     
    }
    else
    this.toastr.success("Login Suceded!","Home");     
  }
}
