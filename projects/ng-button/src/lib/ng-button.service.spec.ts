import { TestBed } from '@angular/core/testing';

import { NgButtonService } from './ng-button.service';

describe('NgButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgButtonService = TestBed.get(NgButtonService);
    expect(service).toBeTruthy();
  });
});
