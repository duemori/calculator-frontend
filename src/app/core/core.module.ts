import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TokenStorageService } from './services/token-storage.service';
import { TransactionRequestInterceptor } from './interceptors/transaction-request.interceptor';
import { ErrorHandlerService } from './services/error-handler.service';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    TokenStorageService,
    ErrorHandlerService,
    TransactionRequestInterceptor
  ]
})
export class CoreModule { }
