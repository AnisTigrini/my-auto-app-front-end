import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  
  constructor(private autoService:autoService) { }


  autForm = new FormGroup({
    titrePost: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
    prixPost: new FormControl('', [Validators.required]),
    kilometragePost: new FormControl('', [Validators.required]),
    marquePost: new FormControl('', [Validators.required]),
    versionPost: new FormControl('', [Validators.required]),
    motricitePost: new FormControl('', [Validators.required]),
    annePost: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    carrosseriePost: new FormControl('', [Validators.required]),
    carburantPost: new FormControl('', [Validators.required]),
    transmissionPost: new FormControl('', [Validators.required]),
    descriptionPost: new FormControl('', [Validators.required, Validators.maxLength(10)]),
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
    console.log(this.autForm.value)
  }
}
