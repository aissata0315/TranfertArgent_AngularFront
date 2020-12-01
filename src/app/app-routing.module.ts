import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionsComponent} from './transactions/transactions.component';
import {FairetransactionComponent} from './fairetransaction/fairetransaction.component';

const routes: Routes = [
  {
    path: "transactions",
    component: TransactionsComponent
  },
  {
    path: "fairetransaction", component: FairetransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
