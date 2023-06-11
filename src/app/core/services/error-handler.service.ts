import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  constructor(private snackBar: MatSnackBar) { }

  handle<T>(operation = 'operation', message = 'Operation failure!', result?: T) {
    return (error: any): Observable<T> => {
      this.snackBar.open(message, 'OK');
      console.error(`${operation} failed`, error);
      return of(result as T);
    };
  }
}
