import { Component, OnInit } from '@angular/core';
import { authService } from '../authService';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  select = 'informations'

  constructor(private authService:authService) { }

  ngOnInit(): void {
  }

  onClick(i:string) {
    this.select = i;
    if (this.select == 'deconnexion') {
      this.authService.deconnexion()
    }
  }

}
