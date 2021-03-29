import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class authService {
    authSubject = new Subject<string>();
    spinnerUpdate = new Subject<boolean>();
    imageProfil='../assets/cool-image.jpg'
  
    constructor(private http: HttpClient) { 
    }

    postConnexionCredentials(credentials) {
        this.http.post("http://localhost:5000/api/connexion", credentials, {'headers': new HttpHeaders().set('content-type', 'application/json')})
        .subscribe((response) => {
            this.spinnerUpdate.next(false)
            if (response['reponse'] == 'echec') {
                this.authSubject.next("Les identifiants entrees sont invalides")
            } else {
                localStorage.setItem('token', response['token'])
                localStorage.setItem('prenom', response['prenom'])
                localStorage.setItem('nom', response['nom'])
                localStorage.setItem('addresseCourriel', response['addresseCourriel'])
                this.authSubject.next("connecté")
            }
            
        }, (error) => {
            this.authSubject.next("Les identifiants entrees sont invalides")
            this.spinnerUpdate.next(false)
        })
    }

    postSubsciptionCredentials(credentials) {
        this.http.post("http://localhost:5000/api/inscription", credentials, {'headers': new HttpHeaders().set('content-type', 'application/json')})
        .subscribe((response) => {
            this.spinnerUpdate.next(false)
            if (response['reponse'] == 'echec') {
                this.authSubject.next("Désolé, l'opération a échoué")
            } else {
                this.authSubject.next("Félicitations, vous vous êtes inscris!")
            }
        }, (error) => {
            this.spinnerUpdate.next(false)
            this.authSubject.next("Une Erreure est survenu lors de votre inscription")
        })
    }

    connecte() {
        return !!localStorage.getItem('token')
    }
}
