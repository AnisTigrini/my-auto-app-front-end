import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { authService } from '../authService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  connection:boolean = false;
  mySubscription:Subscription;
  prenom;
  imageProfil;

  constructor(private authService:authService) { }

  ngOnInit(): void {
    this.connection = this.authService.connecte()
    this.imageProfil = this.authService.imageProfil
    this.prenom = this.authService.prenom
    this.mySubscription = this.authService.authSubject.subscribe((data) => {
      this.imageProfil = this.authService.imageProfil
      this.prenom = this.authService.prenom
    })
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe()
  }
}
