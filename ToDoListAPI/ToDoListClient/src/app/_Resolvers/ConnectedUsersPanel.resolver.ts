import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToDoItem } from '../_Models/ToDoList/ToDoItem';
import { ToDoListService } from '../_Services/toDoList.service';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { User } from '../_Models/Users/User';
import { SignalRService } from '../_Services/signalRService.service';

@Injectable()

export class ConnectedUsersResolver implements Resolve<User[]>{
    constructor(private toDoListService: ToDoListService, private authService: AuthService, private signalRService: SignalRService)  {    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
      this.signalRService.startConnection();
     // this.signalRService.addNewConnectionListener();
      console.log(this.signalRService.getConectedUsers());
      return this.signalRService.getConectedUsers();
    }

}
