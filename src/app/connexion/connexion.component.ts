import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { authService } from "../authService"


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit, OnDestroy {

  reponseConnexion;
  mySubscription:Subscription;

  constructor(private authService:authService) { }

  ngOnInit(): void {
    this.mySubscription = this.authService.authSubject.subscribe((data) => {
      this.reponseConnexion = data;
    })
  }

  connexionForm = new FormGroup({
    adresseCourriel: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4), Validators.maxLength(30)]),
    motDePasse: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)])
  });

  onSubmit() {
    this.authService.postConnexionCredentials(this.connexionForm.value)
    console.log(this.reponseConnexion)
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe()
  }
}
