import { TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatSnackBarModule
      ]
    });
    service = TestBed.inject(TransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
