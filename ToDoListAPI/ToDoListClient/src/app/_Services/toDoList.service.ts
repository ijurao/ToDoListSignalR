import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToDoItem } from '../_Models/ToDoList/ToDoItem';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
baseUrl : string = environment.baseUrl
constructor(private http: HttpClient) { }

getToDoItems(userId: number, page, pageSize){

let params  = new HttpParams();
params = params.append("pageSize", pageSize);
params = params.append("page", page);
return this.http.get<ToDoItem[]>(this.baseUrl + 'ToDoList/' + userId, {params})
  .pipe(
    map(response => {
      return response;
    })
  );

}

addToDoItem(description: string){
  return this.http.post(this.baseUrl + 'toDoList/addToDo', {'description': description});
}

markAsDone(id: number, completed : boolean){
  console.log(completed)
  return this.http.post(this.baseUrl + 'toDoList/changeState/' + id, {});

}

assign(idToDoItem: number, idUser: number){

  return this.http.post(this.baseUrl + 'toDoList/assign/' + idToDoItem + "/" + idUser, {});

}
deleteToDo(id){
  return this.http.post(this.baseUrl + 'toDoList/delete/' + id , {});

}
}


