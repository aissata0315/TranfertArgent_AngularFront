import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private httpClient:HttpClient) { }

  public getTransactions(){
    return this.httpClient.get("http://localhost:8080/envois")
  }

  public post_recepteur(data) {
    const url_recepteur = "http://localhost:8080/recepteur/save";
    return this.httpClient.post(url_recepteur,data);
  }
  public post_emeteur(data){
    const url_emeteur = "http://localhost:8080/emetteur/save";
    return this.httpClient.post(url_emeteur,data);
  }

  public post_envoi(data){
    const url_envoi = "http://localhost:8080/envoi/save";  
    return this.httpClient.post(url_envoi,data);
  }
}
