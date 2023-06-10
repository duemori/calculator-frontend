import { TestBed } from '@angular/core/testing';

import { TransactionRequestInterceptor } from './transaction-request.interceptor';

describe('RequestInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TransactionRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TransactionRequestInterceptor = TestBed.inject(TransactionRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
