import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { TransactionsService } from './services/transactions.service';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    MatSnackBarModule
  ],
  providers: [
    TransactionsService
  ]
})
export class TransactionsModule { }
