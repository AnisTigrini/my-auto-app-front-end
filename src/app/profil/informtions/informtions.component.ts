import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { authService } from 'src/app/authService';

@Component({
  selector: 'app-informtions',
  templateUrl: './informtions.component.html',
  styleUrls: ['./informtions.component.css']
})
export class InformtionsComponent implements OnInit, OnDestroy {

  spinner:boolean = false;
  mySubscription:Subscription;
  myOtherSubscription:Subscription;
  reponseMessage ="";
  nom = localStorage.getItem('nom');
  prenom = localStorage.getItem('prenom');
  imageProfil = localStorage.getItem('imageProfil');
  
  constructor(private authService:authService) { }

  ngOnInit(): void {
    this.mySubscription = this.authService.authSubject.subscribe((data) => {
      this.reponseMessage = data
    })
    this.myOtherSubscription = this.authService.spinnerUpdate.subscribe((data) => {
      this.spinner = data
    })
  }

  infoForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(60)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(60)]),
    imageProfil: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(400), Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
  });

  onSubmit() {
    if (localStorage.getItem('nom') != this.infoForm.value.nom || localStorage.getItem('prenom')!= this.infoForm.value.prenom || localStorage.getItem('imageProfil') != this.infoForm.value.imageProfil) {
      this.spinner = true;
      this.reponseMessage = ""
      this.authService.maj_profil(
        {'nom': this.infoForm.value.nom,
         'prenom':this.infoForm.value.prenom,
         'imageProfil':this.infoForm.value.imageProfil,
         'token':localStorage['token']}
      )
    } else {
      this.reponseMessage = "Désole, l'opération a échoué"
    }
  }

  ngOnDestroy() {
    this.myOtherSubscription.unsubscribe()
    this.mySubscription.unsubscribe()
  }
}
