import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from './features/transactions/pages/credit/credit.component';
import { TransactionsComponent } from './features/transactions/pages/list/transactions.component';
import { OperationComponent } from './features/transactions/pages/operation/operation.component';

const routes: Routes = [
  {
    path: "credit", component: CreditComponent
  },
  {
    path: "transactions", component: TransactionsComponent
  },
  {
    path: "operation", component: OperationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
