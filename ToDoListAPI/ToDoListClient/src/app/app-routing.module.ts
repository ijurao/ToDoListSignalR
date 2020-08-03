import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './ToDoList/ToDoList.component';
import { ToDolistResolver } from './_Resolvers/toDoList.resolver';
import { LoginComponent } from './login/login.component';
import { ConnectedUsersResolver } from './_Resolvers/ConnectedUsersPanel.resolver';
import { CurrentUser } from './_Resolvers/currenUser.resolver';
import { AuthGuard } from './_guards/authGuard';


const routes: Routes = [ 
  { path: 'todolist', component: ToDoListComponent, resolve: {toDoItems : ToDolistResolver , conectedUsers : ConnectedUsersResolver,
                                                              user: CurrentUser}},
   { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
   {path: '**' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
