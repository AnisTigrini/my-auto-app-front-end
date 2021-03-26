import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class authService {
    authSubject = new Subject<string>();
  
    constructor(private http: HttpClient) { 

    }

    postConnexionCredentials(credentials) {
        this.http.post("http://localhost:5000/api/connexion", credentials, {'headers': new HttpHeaders().set('content-type', 'application/json')}).subscribe((response) => {
            console.log(response)
        }, (error) => {
            this.authSubject.next("Une Erreure est survenu lors de votre inscription")
        
        })
    }

    postSubsciptionCredentials(credentials) {
        this.http.post("http://localhost:5000/api/inscription", credentials, {'headers': new HttpHeaders().set('content-type', 'application/json')}).subscribe((response) => {
            console.log(response)
        }, (error) => {
            this.authSubject.next("Les identifiants entrees sont invalides")
        })
    }
}
