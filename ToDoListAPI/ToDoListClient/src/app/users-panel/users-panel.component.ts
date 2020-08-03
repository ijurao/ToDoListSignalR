import { Component, OnInit, Input } from '@angular/core';
import { SignalRService } from '../_Services/signalRService.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../_Models/Users/User';
import { AuthService } from '../_Services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit {
  @Input() conectedUsers: User[];
  constructor(private signalRService: SignalRService, private http: HttpClient, private authService: AuthService,
              private route: ActivatedRoute, private toastr: ToastrService) {
  }

  ngOnInit() {
 
    this.signalRService.newUserConected.subscribe((next: User[]) => {
          this.conectedUsers = next;
    }
    );

  }
  getCurrentUserId(){
    return this.authService.getCurrentUserId();
  }
  canSendMessage(user){
    return this.getCurrentUserId() !== user.id;
  }
}
