import {Injectable} from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IUserLogin} from '../model/login.model';
import 'rxjs/add/operator/map';


@Injectable()

export class LoginService{

    constructor(private _http:HttpClient){}

    /*getUser(): Observable<IUserLogin[]>{
      return this._http.get<IUserLogin[]>("http://localhost:3000/api/users");
    }*/
   getUser(){
      return this._http.get<IUserLogin>("http://localhost:3000/api/users");
    }
   /* getUser(){
      return this._http.get("http://localhost:3000/api/users").subscribe(data=>{console.log("we got",data.recordsets)});
    }*/
   
}