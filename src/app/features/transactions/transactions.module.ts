import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreditComponent } from './pages/credit/credit.component';
import { TransactionsService } from './services/transactions.service';
import { OperationComponent } from './pages/operation/operation.component';
import { TransactionsComponent } from './pages/list/transactions.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    CreditComponent,
    OperationComponent
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    TransactionsComponent,
    CreditComponent,
    OperationComponent
  ],
  providers: [
    TransactionsService
  ]
})
export class TransactionsModule { }
