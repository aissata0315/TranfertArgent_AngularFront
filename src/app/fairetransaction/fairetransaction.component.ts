import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {TransactionService} from '../services/transaction.service';
import {Router} from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-fairetransaction',
  templateUrl: './fairetransaction.component.html',
  styleUrls: ['./fairetransaction.component.css']
})
export class FairetransactionComponent implements OnInit {

  constructor(private transService:TransactionService, private router:Router) { }

  ngOnInit(): void {
  }

  faireTransaction(data: any) {
    console.log(data);
    const formData_emmeteur = new FormData()
    formData_emmeteur.append('nom', data.nomEmetteur);
    formData_emmeteur.append('prenom', data.prenomEmetteur);
    formData_emmeteur.append('telephone', data.telEmetteur);
    formData_emmeteur.append('cni', data.cni);

    const formData_recepteur= new FormData()
    formData_recepteur.append('nom', data.nomRecepteur);
    formData_recepteur.append('prenom', data.prenomRecepteur);
    formData_recepteur.append('telephone', data.telRecepteur);

    const formData_envoi= new FormData();
    formData_envoi.append('montant', data.montant);
    formData_envoi.append('date', data.date);
    
  
    console.log(formData_emmeteur);
    console.log(formData_recepteur);
    console.log(formData_envoi);
    
    this.transService.post_recepteur(formData_recepteur)
      .subscribe(res => {
        this.transService.post_emeteur(formData_emmeteur).subscribe(res => {
            this.transService.post_envoi(formData_envoi).subscribe()
        })
      },error => {
        console.log(error)
      })


  }
}
