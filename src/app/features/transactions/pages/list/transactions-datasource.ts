import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, BehaviorSubject, finalize } from 'rxjs';

import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../models/transaction';

export class TransactionsDataSource extends DataSource<Transaction> {
  data: Transaction[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  public transactionsCount$ = 0;

  constructor(private service: TransactionsService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Transaction[]> {
    return this.transactionsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.transactionsSubject.complete();
    this.loadingSubject.complete();
  }

  loadTransactions(search = '', sortBy = '', sortDirection = '', page = 0, perPage = 5) {
    this.loadingSubject.next(true);

    this.service.getTransactions(search, sortBy, sortDirection, page, perPage).pipe(
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(
      pageable => {
        this.transactionsCount$ = pageable.totalElements;
        this.transactionsSubject.next(pageable.content);
      }
    );
  }
}
