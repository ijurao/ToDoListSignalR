/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToDoListService } from './toDoList.service';

describe('Service: ToDoList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoListService]
    });
  });

  it('should ...', inject([ToDoListService], (service: ToDoListService) => {
    expect(service).toBeTruthy();
  }));
});
