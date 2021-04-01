import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageprincipale',
  templateUrl: './pageprincipale.component.html',
  styleUrls: ['./pageprincipale.component.css']
})
export class PageprincipaleComponent implements OnInit {


  autoBrandList:string[] = [];
  autoModelList:string[] = [];

  fenetreMarques = false
  fenetreModeles = false

  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/marqueauto').subscribe((response) => {
      this.autoBrandList = response['response'].map(a => a.Marque)
    })
  }

  afMarques() {
    this.fenetreMarques = !this.fenetreMarques
  }

  
  afModeles() {
    this.fenetreModeles = !this.fenetreModeles
  }
}
