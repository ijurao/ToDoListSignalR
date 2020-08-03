import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IErrorHandler } from './IErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class ToastErrorHandlerService implements IErrorHandler {

constructor(private toastService: ToastrService) { }
  handleError(error: string) {
    this.toastService.error(error);
  }
 

}


