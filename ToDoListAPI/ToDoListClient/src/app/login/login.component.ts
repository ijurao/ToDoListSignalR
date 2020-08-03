import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { FormsModule }   from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../_Models/Users/User';
import { empty } from 'rxjs';
import { Router } from '@angular/router';
import { SignalRService } from '../_Services/signalRService.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modelInputLogin: userInputModel = new userInputModel() ;
  user: User;
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router, private signalR: SignalRService) {
    this.modelInputLogin.userName = 'user1@gmail.com';
    this.modelInputLogin.password = 'password';
   }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.modelInputLogin).subscribe(
      next => {this.toastr.success(`welcome ${this.authService.getCurrentUser().userName}`);
               this.router.navigate(['/todolist']);},
      error => {console.log(error); },
      () => {this.router.navigate(['/todolist']);});
}
loggedIn(){
  return  ( this.authService.getCurrentUser() && !this.authService.getCurrentUser() !== null);
}

logout(){
   this.authService.logout();
}
}
export class userInputModel {
  userName: string;
  password: string;
}
