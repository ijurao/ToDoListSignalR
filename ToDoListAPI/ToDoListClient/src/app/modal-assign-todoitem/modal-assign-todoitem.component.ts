import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToDoListService } from '../_Services/toDoList.service';
import { AuthService } from '../_Services/auth.service';


@Component({
  selector: 'app-modal-assign-todoitem',
  templateUrl: './modal-assign-todoitem.component.html',
  styleUrls: ['./modal-assign-todoitem.component.css']
})
export class ModalAssignTodoitemComponent implements OnInit {

  @Input() public users;
  @Input() public todoitem;

  constructor(private todoListService: ToDoListService,public activeModal: NgbActiveModal,
              private authService: AuthService) { }

  ngOnInit() {
  }

  assign(user){
     this.todoListService.assign(this.todoitem.id,user.id).subscribe( res => {
           this.todoitem = res;
           this.activeModal.close(res);
    });
  }
canAssign(user){
  console.log(this.authService.getCurrentUser().userName)
return user.userName !== this.authService.getCurrentUser().userName;
}
}
