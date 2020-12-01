import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) { }

  public getTransactions(){
    return this.httpClient.get("http://localhost:8080/envois")
  }
}
