import { TestBed } from '@angular/core/testing';

import { TokenStorageService } from './token-storage.service';

describe('TokenStorageService', () => {
  let tokenStorageService: TokenStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenStorageService]
    });
    tokenStorageService = TestBed.inject(TokenStorageService);
  });

  it('should be created', () => {
    expect(tokenStorageService).toBeTruthy();
  });

  it('should execute methods as expected', () => {
    const token = 'TOKEN';

    tokenStorageService.set(token);

    expect(tokenStorageService.get()).toBe(token);
    expect(tokenStorageService.exists()).toBeTrue();

    tokenStorageService.remove();

    expect(tokenStorageService.get()).toBeNull()
    expect(tokenStorageService.exists()).toBeFalse();
  });
});
