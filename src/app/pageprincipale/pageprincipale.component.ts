import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageprincipale',
  templateUrl: './pageprincipale.component.html',
  styleUrls: ['./pageprincipale.component.css']
})
export class PageprincipaleComponent implements OnInit {

  autoBrandList:string[] = ["Acura", "Alpha Romeo", "AMC", "Aston Martin", "Audi"
, "Bentley", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ferrari"
, "Fiat", "Ford", "Genesis", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia",
"Lamborghini", "Land Rover", "Lexus", "Lincoln", "Maserati", "Mazda", "Mclaren", "Mercedes-Benz",
"Mitsubishi", "Nissan", "Pontiac", "Porsche", "Rolls-Royce", "Subaru", "Suzuki", "Tesla", "Toyota",
"Volkswagen", "Volvo"];
  constructor() { }

  ngOnInit(): void {
  }

}
