import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreditComponent } from './features/transactions/pages/credit/credit.component';
import { TransactionsComponent } from './features/transactions/pages/list/transactions.component';
import { OperationComponent } from './features/transactions/pages/operation/operation.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { MainComponent } from './shared/main/main.component';
import { LoggedAuthGuard } from './core/guard/logged-auth-guard.service';
import { NotLoggedAuthGuard } from './core/guard/not-logged-auth-guard.service';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, canActivate: [NotLoggedAuthGuard]
  },
  {
    path: '', component: MainComponent, canActivate: [LoggedAuthGuard],
    children: [
      { path: 'credit', component: CreditComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'operation', component: OperationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
