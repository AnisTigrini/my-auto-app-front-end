import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afficher-auto',
  templateUrl: './afficher-auto.component.html',
  styleUrls: ['./afficher-auto.component.css']
})
export class AfficherAutoComponent implements OnInit {

  annees:number[] = []
  carrosserie:string[] = ["Camionnette", "VUS", "Berline", "Fourgonnette", 
  "Voitures sport et coupés", "À hayon", "Familiale"]
  
  constructor() { }

  ngOnInit(): void {
    var annee = 1900
    while (annee < 2021) {
      this.annees.push(annee)
      annee++
    }
  }

}
