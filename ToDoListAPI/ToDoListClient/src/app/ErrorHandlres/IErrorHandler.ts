import { Injectable } from '@angular/core';

@Injectable()
export abstract class IErrorHandler {

    public abstract handleError(error: string);
}
