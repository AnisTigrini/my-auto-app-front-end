import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class autoService {

    listeAuto = [];
    listeAC;
    selectionne;
    photos;
    equip;
    mySubject = new Subject<string>();

    constructor(private http:HttpClient) {

    }

    getAllAutos() {
        this.http.get('http://localhost:5000/api/marqueauto').subscribe((response) => {
            this.listeAuto = response['response']
            this.mySubject.next('disponible')
          })
    }

    getBrandsAutos(placeholder) {
        this.http.post("http://localhost:5000/api/get_marque_auto", {'marqueAuto':placeholder}, {'headers': new HttpHeaders().set('content-type', 'application/json')})
        .subscribe((response) => {
            this.listeAC = response["resultat"]
            this.mySubject.next("Disponible")
        }, (error) => {
            console.log('error')
        })
    }

    getCarosserieAutos(placeholder) {
        this.http.post("http://localhost:5000/api/get_carrosserie_auto", {'typeCarrosserie':placeholder}, {'headers': new HttpHeaders().set('content-type', 'application/json')})
        .subscribe((response) => {
            this.listeAC = response["resultat"]
            this.mySubject.next("Disponible")
        }, (error) => {
            console.log('error')
        })
    }

    select(postid) {
        for (var i=0; i < this.listeAC.length;i++) {
            if (postid == this.listeAC[i].idpost) {
                this.selectionne = this.listeAC[i]
                console.log(this.selectionne)
            }
        }
        this.mySubject.next("Disponible")
    }

    photo_equip(placeholder) {
        this.http.post("http://localhost:5000/api/photo_equip", {'id':placeholder}, {'headers': new HttpHeaders().set('content-type', 'application/json')})
        .subscribe((response) => {
            this.photos = response['photos']
            this.equip = response['eq']
            this.mySubject.next("Disponible")
        }, (error) => {
            console.log('error')
        })
    }
}