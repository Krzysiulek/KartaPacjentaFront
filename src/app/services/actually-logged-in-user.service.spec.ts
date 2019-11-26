import { TestBed } from '@angular/core/testing';

import { ActuallyLoggedInUserService } from './actually-logged-in-user.service';

describe('ActuallyLoggedInUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActuallyLoggedInUserService = TestBed.get(ActuallyLoggedInUserService);
    expect(service).toBeTruthy();
  });
});
