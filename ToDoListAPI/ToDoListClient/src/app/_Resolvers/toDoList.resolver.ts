import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToDoItem } from '../_Models/ToDoList/ToDoItem';
import { ToDoListService } from '../_Services/toDoList.service';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../_Services/auth.service';

@Injectable()

export class ToDolistResolver implements Resolve<ToDoItem[]>{
  currentPage = 1;
  pageSize = 10;
    constructor(private toDoListService: ToDoListService,private authService: AuthService) {    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ToDoItem[]> {
        return  this.toDoListService.getToDoItems(this.authService.getCurrentUserId(),this.currentPage,this.pageSize).pipe(
        catchError(error =>
          {
            console.log(error);
            return of(null);
          }));
    }

}
