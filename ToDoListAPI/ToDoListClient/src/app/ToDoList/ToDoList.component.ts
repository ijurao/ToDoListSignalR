import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../_Models/ToDoList/ToDoItem';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoListService } from '../_Services/toDoList.service';
import { AuthService } from '../_Services/auth.service';
import { User } from '../_Models/Users/User';
import { SignalRService } from '../_Services/signalRService.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalAssignTodoitemComponent } from '../modal-assign-todoitem/modal-assign-todoitem.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ToDoList',
  templateUrl: './ToDoList.component.html',
  styleUrls: ['./ToDoList.component.css']
})
export class ToDoListComponent implements OnInit {
   newToDoItem: string;
   toDoItems: ToDoItem[];
   conectedUsers:  User[];
   currentUser: User;
   closeResult = '';
  currentPage = 2;
  pageSize = 10;
  end: boolean;
  constructor(private route: ActivatedRoute, private toDoListService: ToDoListService, private authService: AuthService,
              private router: Router, private signalRService: SignalRService,private modalService: NgbModal,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.route.data.subscribe(resul => {
      this.currentUser = resul.user;
    });

    this.route.data.subscribe(resul => {
      this.toDoItems = resul.toDoItems;
    });

    this.route.data.subscribe(resul  => this.conectedUsers = resul.conectedUsers);
    this.signalRService.newTask.subscribe(res => {
      res.isNew = true;
      this.toDoItems.unshift(res);
      this.toastr.info("you have a new task")});
  }

  addToDoItem(){
    this.toDoListService.addToDoItem(this.newToDoItem).subscribe((next: ToDoItem ) =>
      {this.toastr.success("todo added!");
       this.toDoItems.unshift(next);
       this.newToDoItem = "";
    });
  }

  logout(){
    this.authService.logout();
    this.signalRService.disconectUser();
    this.router.navigate(['/login']);
  }

  markAsDone(toDoId){
    this.toDoListService.markAsDone(toDoId, true).subscribe((data: ToDoItem) => {
     this.modifyElements(data);
    });
  }
  onEnter() {
  this.addToDoItem();
   }

  modifyElements(item: ToDoItem){

   const  objIndex = this.toDoItems.findIndex((obj => obj.id === item.id));
   this.toDoItems[objIndex].completed = item.completed;
  }
  getUserData(){
    return  this.authService.currentUser.userName;
  }
  currentUserIsAdmin(){
    return (this.currentUser.userRoles.findIndex(x => x.role === 'Admin') !== -1);
  }
  open(todoitem) {
   const modalRef =  this.modalService.open(ModalAssignTodoitemComponent)
   modalRef.componentInstance.users = this.signalRService.getConectedUsers();
   modalRef.componentInstance.todoitem = todoitem;
   modalRef.result.then(res => {
    const index = this.toDoItems.findIndex(tdi => tdi.id === res.id);
    this.toDoItems[index] = res;
  }, (reason) => {});

  }

  private addNewItems(){
    this.toDoListService.getToDoItems(this.authService.getCurrentUserId(),this.currentPage,this.pageSize).subscribe( 
      (res: ToDoItem[]) =>{
        if(res.length > 0)
        {
         this.toDoItems = this.toDoItems.concat(res);
        }
        else{
          this.end = true
        }
        });
  }
  
  onScroll(){
  this.addNewItems();
  this.currentPage = this.currentPage + 1;
}
isAll(){
  return this.end;
}

backToTheTop(){
  document.documentElement.scrollTop = 0;
}
deleteToDo(id){

  this.toDoListService.deleteToDo(id).subscribe((res: ToDoItem ) =>{
    const index = this.toDoItems.findIndex( item => item.id === res.id);
    this.toDoItems.splice(index, 1);
  });
}



}
