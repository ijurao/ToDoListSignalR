import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpErrorInterceptor } from './_Services/http.interceptors/http.error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { ToastrModule } from 'ngx-toastr';
import { ToastErrorHandlerService } from './ErrorHandlres/ToastErrorHandler.service';
import { IErrorHandler } from './ErrorHandlres//IErrorHandler';
import { ToDoListComponent } from './ToDoList/ToDoList.component';
import { ToDoItemComponent } from './ToDoItem/ToDoItem.component';
import { ToDolistResolver } from './_Resolvers/toDoList.resolver';
import { TokenInterceptor } from './_Services/http.interceptors/token.interceptor';
import { UsersPanelComponent } from './users-panel/users-panel.component';
import { ConnectedUsersResolver } from './_Resolvers/ConnectedUsersPanel.resolver';
import { CurrentUser } from './_Resolvers/currenUser.resolver';
import { ModalAssignTodoitemComponent } from './modal-assign-todoitem/modal-assign-todoitem.component';
@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      ToDoListComponent,
      ToDoItemComponent,
      UsersPanelComponent,
      ModalAssignTodoitemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      LoadingBarHttpClientModule,
      AppRoutingModule,
      InfiniteScrollModule
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: httpErrorInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      { provide: IErrorHandler, useClass: ToastErrorHandlerService },
      ToDolistResolver,
      ConnectedUsersResolver,
      CurrentUser

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
