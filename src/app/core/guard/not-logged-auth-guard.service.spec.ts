import { TestBed } from '@angular/core/testing';

import { NotLoggedAuthGuard } from './not-logged-auth-guard.service';

describe('AuthGuardService', () => {
  let service: NotLoggedAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotLoggedAuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
