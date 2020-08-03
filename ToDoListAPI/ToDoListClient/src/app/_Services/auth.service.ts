import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../_Models/Users/User';
import {map, tap} from 'rxjs/operators';
import { empty } from 'rxjs';
import { SignalRService } from './signalRService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
@Output() userDisconected  = new EventEmitter();
constructor(private httpService: HttpClient) {
this.baseUrl = environment.baseUrl;

 }
  currentUser : User;
  baseUrl: string;

    getToken() {
        return sessionStorage.getItem('token');
    }

login(data : any){

 return this.httpService.post(this.baseUrl + 'auth/login', data).pipe(
   map((response: any) => {
     const token = response['token'];
     const user = response['user'];
     if (token){
       sessionStorage.setItem('token', token);
     }
     if (user){
       sessionStorage.setItem('user', JSON.stringify(user));
       this.currentUser = user;
     }

   })
  );
}

logout(){
  
  sessionStorage.clear();
}

getCurrentUser(): any{

  return JSON.parse(sessionStorage.getItem("user"));

}

isLoggedIn():boolean{
  return sessionStorage.getItem("token") !== null;
}

getCurrentUserId(){

 return JSON.parse(sessionStorage.getItem('user')).id;
}

}
