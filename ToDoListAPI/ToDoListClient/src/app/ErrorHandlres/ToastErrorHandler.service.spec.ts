/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastErrorHandlerService } from './ToastErrorHandler.service';

describe('Service: ToastErrorHandler', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastErrorHandlerService]
    });
  });

  it('should ...', inject([ToastErrorHandlerService], (service: ToastErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
