import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { autoService } from '../autoservice';

@Component({
  selector: 'app-afficher-auto',
  templateUrl: './afficher-auto.component.html',
  styleUrls: ['./afficher-auto.component.css']
})
export class AfficherAutoComponent implements OnInit {

  annees:number[] = []
  carrosserie:string[] = ["Camionnette", "VUS", "Berline", "Fourgonnette", 
  "Voitures sport et coupés", "À hayon", "Familiale"];
  autoBrandList:string[] = [];
  show_images:boolean = false;
  img_un;
  img_deux;
  img_trois;

  
  constructor(private autoService:autoService, private http:HttpClient, private router:Router) { }


  autForm = new FormGroup({
    titrePost: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
    prixPost: new FormControl('', [Validators.required]),
    kilometragePost: new FormControl('', [Validators.required]),
    marquePost: new FormControl('', [Validators.required]),
    versionPost: new FormControl('', [Validators.minLength(4)]),
    motricitePost: new FormControl('', [Validators.minLength(4)]),
    annePost: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    carrosseriePost: new FormControl('', [Validators.required]),
    carburantPost: new FormControl('', [Validators.required]),
    transmissionPost: new FormControl('', [Validators.required]),
    descriptionPost: new FormControl('', [Validators.required, Validators.minLength(20)]),
    equipement_un: new FormControl('', [Validators.minLength(5)]),
    equipement_deux: new FormControl('', [Validators.minLength(5)]),
    equipement_trois: new FormControl('', [Validators.minLength(5)]),
    equipement_quatre: new FormControl('', [Validators.minLength(5)]),
    image_un: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    image_deux: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    image_trois: new FormControl('', [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
  });

  ngOnInit(): void {
    var annee = 1900
    while (annee < 2021) {
      this.annees.push(annee)
      annee++
    }
    
    this.autoBrandList = this.autoService.listeAuto
  }

  onSubmit() {
    this.http.post("http://localhost:5000/api/poster_auto", {'token':localStorage.getItem('token'), 
    'auto':this.autForm.value}, {'headers': new HttpHeaders().set('content-type', 'application/json')})
    .subscribe((response) => {
      if (response["response"] == "success") {
        this.router.navigate(['/'])
      }
    })
  }

  showImages() {
    this.show_images = !this.show_images
    this.img_un = this.autForm.value.image_un
    this.img_deux = this.autForm.value.image_deux
    this.img_trois = this.autForm.value.image_trois
  }
}
