import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { authService } from "../authService"

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit, OnDestroy {

  reponseInscription;
  mySubscription:Subscription

  constructor(private authService:authService) { }

  ngOnInit(): void {
    this.mySubscription = this.authService.authSubject.subscribe((data) => {
      this.reponseInscription = data;
    })
  }

  inscriptionForm = new FormGroup({
    adresseCourriel: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4), Validators.maxLength(60)]),
    motDePasse: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
    nomUtilisateur: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    prenomUtilisateur: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    anneNaissance: new FormControl('', [Validators.required])
  });

  
  onSubmit() {
    this.authService.postSubsciptionCredentials(this.inscriptionForm.value)
  }

  ngOnDestroy() {

  }
}
