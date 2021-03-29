import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { authService } from '../authService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connection:boolean = false;
  prenom;
  imageProfil;

  constructor(private authService:authService) { }

  ngOnInit(): void {
    this.connection = this.authService.connecte()
    this.imageProfil = localStorage.getItem('imageProfil')
    this.prenom = localStorage.getItem('prenom')
  }
}
