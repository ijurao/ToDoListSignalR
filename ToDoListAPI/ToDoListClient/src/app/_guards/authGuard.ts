import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_Services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard  implements CanActivate{

    constructor(private router: Router, private authService: AuthService) {
    }
    canActivate(): boolean{
        if(this.authService.isLoggedIn()){
            this.router.navigate(['/todolist']);
            return false;
        }
        else{
            return true;
        }
    }
}
