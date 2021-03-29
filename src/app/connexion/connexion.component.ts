import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { authService } from "../authService"


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit, OnDestroy {

  reponseConnexion = "";
  mySubscription:Subscription;
  myOtherSubscription:Subscription;
  spinner:boolean = false;

  constructor(private authService:authService, private router:Router) {
  }

  ngOnInit(): void {
    this.mySubscription = this.authService.authSubject.subscribe((data) => {
      this.reponseConnexion = data;
      if (this.reponseConnexion == 'connecté') {
        this.router.navigate(['/'])
      }
    })
    this.myOtherSubscription = this.authService.spinnerUpdate.subscribe((data) => {
      this.spinner = data
    })

    if (this.authService.connecte()){
      this.router.navigate(['/']);
    }
  }

  connexionForm = new FormGroup({
    adresseCourriel: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4), Validators.maxLength(30)]),
    motDePasse: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)])
  });

  onSubmit() {
    this.spinner = true;
    this.reponseConnexion = ""
    this.authService.postConnexionCredentials(this.connexionForm.value)
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe()
    this.myOtherSubscription.unsubscribe()
  }
}
