import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { authService } from '../authService';
import { autoService } from '../autoservice';

@Component({
  selector: 'app-auto-unique',
  templateUrl: './auto-unique.component.html',
  styleUrls: ['./auto-unique.component.css']
})
export class AutoUniqueComponent implements OnInit, OnDestroy {

  mySub:Subscription;
  auto;
  contacter = "Contacter";
  images = []
  imageSelectionne;
  num = 0;
  equipement = []
  color = "#1477d4"
  connecte;

  constructor(private autoService:autoService, private authService:authService, private http:HttpClient) { }

  ngOnInit(): void {
    this.auto = this.autoService.selectionne
    this.connecte = this.authService.connecte()
    this.autoService.photo_equip(this.auto.idpost)
    this.mySub = this.autoService.mySubject.subscribe((data) => {
      this.images = this.autoService.photos
      this.equipement = this.autoService.equip
      if (this.images.length > 0) {
        this.imageSelectionne = this.images[this.num].urlimage
      }
    })
  }

  ngOnDestroy() {
    this.mySub.unsubscribe()
  }

  email() {
    this.contacter = this.auto.addresseCourriel
  }

  changerImage() {
    if (this.num == this.images.length) {
      this.num = 0
    } else {
      this.imageSelectionne = this.images[this.num].urlimage
      this.num += 1
    }
  }

  bclick(e) {
    this.color = "red"
    this.http.post("http://localhost:5000/api/poster_favoris", {'idpost': this.autoService.selectionne.idpost, "token":localStorage.getItem('token')}, 
    {'headers': new HttpHeaders().set('content-type', 'application/json')})
    .subscribe((response) => {
      console.log(response)
    }, (error) => {
        console.log('error')
    })
  }
}
