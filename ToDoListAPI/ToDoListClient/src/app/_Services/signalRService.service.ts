import { Injectable, EventEmitter, Output } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { User } from '../_Models/Users/User';
import { AuthService } from './auth.service';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { ToDoItem } from '../_Models/ToDoList/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private usersConnected: User[] = new Array();
  private hubConnection: signalR.HubConnection;
  @Output() newUserConected = new EventEmitter();
  @Output() newTask = new EventEmitter();


constructor(private authService: AuthService,private localStorage: LocalStorage) {
  this.hubConnection = new signalR.HubConnectionBuilder()
  .withUrl(environment.baseUrlHub, {skipNegotiation: true,
  transport: signalR.HttpTransportType.WebSockets, accessTokenFactory : () => this.authService.getToken() })
  .build();
}
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl(environment.baseUrlHub, {skipNegotiation: true,
                            transport: signalR.HttpTransportType.WebSockets, accessTokenFactory : () => this.authService.getToken() })
                            .build();

    this.hubConnection.on('newConnection', (data: User[]) => { this.handleData(data); });
    this.hubConnection.on('closeConnection', (data: User[]) => { this.handleData(data); });
    this.hubConnection.on('newTask' ,(data: any) => { this.newTask.emit(data); });

    this.hubConnection
      .start()
      .then((res: any) => console.log(res))
      .catch(err => console.log('Error while starting connection: ' + environment.baseUrl + 'panel'));
  }


  public disconectUser(){
    const usersConected = JSON.parse(localStorage.getItem("connectedUsers"));
    if (usersConected.length === 1){ // i am the last
      localStorage.clear();
   }
    this.hubConnection.stop();
  }

private handleData(data: User[])
{

   localStorage.setItem('connectedUsers', JSON.stringify(data));
   this.newUserConected.emit(data);

}

public  getConectedUsers(){
  const data =   localStorage.getItem('connectedUsers') ;
  const res = JSON.parse(data) || [];
  return res.map(res => res);
  }

}
