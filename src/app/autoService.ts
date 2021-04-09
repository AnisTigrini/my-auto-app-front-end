import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class autoService {

    listeAuto = [];
    mySubject = new Subject<string>();

    constructor(private http:HttpClient) {

    }

    getAllAutos() {
        this.http.get('http://localhost:5000/api/marqueauto').subscribe((response) => {
            this.listeAuto = response['response']
            this.mySubject.next('disponible')
          })
    }

}