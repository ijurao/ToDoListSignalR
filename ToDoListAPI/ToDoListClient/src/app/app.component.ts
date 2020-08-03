import { Component, HostListener } from '@angular/core';
import { AuthService } from './_Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'ToDoListClient';
  /**
   *
   */
  constructor(private authService: AuthService) {
    
    
  }
/*  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
       this.authService.logout();
   }
  
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event) {
    //this.authService.logout();
  // localStorage.clear();
  }*/
 
}
