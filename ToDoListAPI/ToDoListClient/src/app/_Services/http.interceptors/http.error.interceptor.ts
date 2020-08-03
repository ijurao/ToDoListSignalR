import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { IErrorHandler } from 'src/app/ErrorHandlres/IErrorHandler';
import { Injectable, Injector } from '@angular/core';

@Injectable()

export class httpErrorInterceptor  implements HttpInterceptor{
    constructor(private errorHandler: IErrorHandler ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                let errorText = '';
                if ( (error instanceof HttpErrorResponse)){

                    if (error.status === 0){ // conection refused
                        errorText = 'Error has ocurred trying to connect to the server';
                    }
                    else{
                         errorText = this.buildMessageError(error);
                        }
                    //console.log(this.errorHandler);
                    this.errorHandler.handleError(errorText);
                    return throwError(error.message);

                }
          })
        );
}

buildMessageError( error: HttpErrorResponse): string{
    return error.error;
}
}