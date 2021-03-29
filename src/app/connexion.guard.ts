import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { authService } from './authService'

@Injectable({
  providedIn: 'root'
})
export class ConnexionGuard implements CanActivate {
  constructor(private authService:authService, private router:Router) {

  }

  canActivate():boolean {
    const connecte = this.authService.connecte()
    if (connecte){
      this.router.navigate(['/']);
    }
    return !connecte;
  } 
}
