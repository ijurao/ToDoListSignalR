import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToDoItem } from '../_Models/ToDoList/ToDoItem';
import { ToDoListService } from '../_Services/toDoList.service';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { User } from '../_Models/Users/User';

@Injectable()

export class CurrentUser implements Resolve<User>{
    constructor(private authService: AuthService) {    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
        return  this.authService.getCurrentUser();
    }

}
