import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError } from 'rxjs';
import { Transaction } from './transaction';
import { Pageable } from 'src/app/core/model/pageable';
import { Operation } from './operation';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransactions(search = '', sortBy = '', sortDirection = '', page = 0, perPage = 5): Observable<Pageable<Transaction>> {
    return this.http.get<Pageable<Transaction>>(`${environment.transactionsUrl}/v1/transactions`, {
      params: new HttpParams()
        .set('page', page)
        .set('perPage', perPage)
        .set('search', search)
        .set('sortBy', sortBy)
        .set('sortDirection', sortDirection.toUpperCase())
    }).pipe(
      catchError(this.handleError<Pageable<Transaction>>('getTransactions'))
    );
  }

  postCreditTransaction(body: any): Observable<any> {
    return this.http.post(`${environment.transactionsUrl}/v1/transactions/credits`, body).pipe(
      catchError(this.handleError<any>('postCreditTransaction'))
    );
  }

  postOperationTransaction(body: any): Observable<any> {
    return this.http.post(`${environment.transactionsUrl}/v1/transactions`, body).pipe(
      catchError(this.handleError<any>('postOperationTransaction'))
    );
  }

  deleteOperationTransaction(id: number): Observable<any> {
    return this.http.delete(`${environment.transactionsUrl}/v1/transactions/${id}`).pipe(
      catchError(this.handleError<any>('deleteOperationTransaction'))
    );
  }

  getOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${environment.transactionsUrl}/v1/operations`).pipe(
      catchError(this.handleError<Operation[]>('getOperations'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed`, error);
      return of(result as T);
    };
  }
}