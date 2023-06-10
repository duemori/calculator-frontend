import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { tap, fromEvent, debounceTime, distinctUntilChanged, merge } from 'rxjs';

import { TransactionsDataSource } from './transactions-datasource';
import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Transaction>;
  @ViewChild('input') input!: ElementRef;
  dataSource: TransactionsDataSource;

  transactionsCount = 0;

  displayedColumns = ['id', 'userId', 'operation', 'amount', 'creditDebit', 'params', 'response', 'date', 'delete'];

  constructor(private service: TransactionsService) {
    this.dataSource = new TransactionsDataSource(service);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource.loadTransactions();
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadTransactionsPage();
        })
      )
      .subscribe();

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadTransactionsPage())
      )
      .subscribe();
  }

  loadTransactionsPage() {
    this.dataSource.loadTransactions(
      this.input.nativeElement.value,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }

  delete(id: number) {
    this.service.deleteOperationTransaction(id).subscribe({
      complete: () => this.loadTransactionsPage()
    });
  }
}
