import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TransactionService} from '../services/transaction.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  public  transactions:any;
  constructor(private transService:TransactionService) { }

  ngOnInit(): void {
  }

  onGetTransaction() {
    this.transService.getTransactions()
      .subscribe(data=>{
        this.transactions=data;
      }, error => {
        console.log(error);
      })

  }
}
