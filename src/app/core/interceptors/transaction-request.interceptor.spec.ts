import { TestBed } from '@angular/core/testing';

import { TokenStorageService } from '../services/token-storage.service';
import { TransactionRequestInterceptor } from './transaction-request.interceptor';

describe('RequestInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TransactionRequestInterceptor,
      TokenStorageService
    ]
  }));

  it('should be created', () => {
    const interceptor: TransactionRequestInterceptor = TestBed.inject(TransactionRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
