import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from '../services/token-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TransactionRequestInterceptor implements HttpInterceptor {
  constructor(private tokenStorage: TokenStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenStorage.get();

    if (token) {
      if (request.url.startsWith(environment.transactionsUrl)) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    return next.handle(request);
  }
}
