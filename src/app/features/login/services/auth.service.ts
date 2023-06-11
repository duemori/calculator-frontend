import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { Token } from '../../../core/models/token';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

const body = new HttpParams()
      .set('scope', 'ADMIN')
      .set('grant_type', 'client_credentials');

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  login(email: string, password: any): Observable<Token> {
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type','application/x-www-form-urlencoded')
        .set('Authorization',`Basic ${window.btoa(email + ":" + password)}`)
      };

    return this.http.post<Token>(`${environment.authUrl}/oauth2/token`, body, options).pipe(
      catchError(this.errorHandler.handle<Token>('login', 'Invalid email or password!'))
    );
  }
}
