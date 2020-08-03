/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignalRServiceService } from './signalRService.service';

describe('Service: SignalRService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignalRServiceService]
    });
  });

  it('should ...', inject([SignalRServiceService], (service: SignalRServiceService) => {
    expect(service).toBeTruthy();
  }));
});
