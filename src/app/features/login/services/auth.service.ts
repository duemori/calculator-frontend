import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Token } from '../../../core/models/token';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const body = new HttpParams()
      .set('scope', 'message:read')
      .set('grant_type', 'client_credentials');

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: any): Observable<Token> {
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type','application/x-www-form-urlencoded')
        .set('Authorization',`Basic ${window.btoa(email + ":" + password)}`)
      };

    return this.http.post<Token>(`${environment.authUrl}/oauth2/token`, body, options).pipe(
      catchError(this.handleError<Token>('login'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed`, error);
      return of(result as T);
    };
  }
}
