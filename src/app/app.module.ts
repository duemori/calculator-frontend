import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';
import { TransactionsModule } from './features/transactions/transactions.module';
import { TransactionRequestInterceptor } from './core/interceptors/transaction-request.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    LoginModule,
    TransactionsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TransactionRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
