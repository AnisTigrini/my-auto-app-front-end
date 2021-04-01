import { Component, OnInit } from '@angular/core';
import { authService } from './authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-auto-app';

  constructor(private authService:authService) {}

  ngOnInit() {
    this.authService.get_profil()
  }
}
