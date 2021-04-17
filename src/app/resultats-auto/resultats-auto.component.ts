import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { autoService } from '../autoservice';

@Component({
  selector: 'app-resultats-auto',
  templateUrl: './resultats-auto.component.html',
  styleUrls: ['./resultats-auto.component.css']
})
export class ResultatsAutoComponent implements OnInit, OnDestroy {

  mySubscription:Subscription;
  maliste;
  
  constructor(private autoService:autoService, private router:Router) { }

  ngOnInit(): void {
    this.maliste = this.autoService.listeAC
    
    this.mySubscription = this.autoService.mySubject.subscribe((res) => {
      this.maliste = this.autoService.listeAC
    })
  }

  selected(idcar) {
    this.autoService.select(idcar)
    this.router.navigate(['auto-unique'])
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe()
  }
}
