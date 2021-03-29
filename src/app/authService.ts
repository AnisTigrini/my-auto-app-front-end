import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})

export class authService {
    authSubject = new Subject<string>();
    spinnerUpdate = new Subject<boolean>();
  
    constructor(private http: HttpClient, private router:Router) { 
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
                localStorage.setItem('imageProfil', response['imageProfil'])
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

    maj_profil(credentials) {
        this.http.post("http://localhost:5000/api/maj-profil", credentials, {'headers': new HttpHeaders().set('content-type', 'application/json')})
        .subscribe((response) => {
            this.spinnerUpdate.next(false)
            if (response['reponse'] == 'echec') {
                this.authSubject.next("Désolé, l'opération a échoué")
            } else {
                this.authSubject.next("Félicitations!")
                localStorage.setItem('prenom', response['prenom'])
                localStorage.setItem('nom', response['nom'])
                localStorage.setItem('imageProfil', response['imageProfil'])
            }
            
        }, (error) => {
            this.authSubject.next("Désolé, l'opération a échoué")
        })
    }

    connecte() {
        return !!localStorage.getItem('token')
    }



    deconnexion() {
        localStorage.clear()
        this.router.navigate(['/'])
    }
}
