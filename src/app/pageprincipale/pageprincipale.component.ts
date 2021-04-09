import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { autoService } from '../autoservice';

@Component({
  selector: 'app-pageprincipale',
  templateUrl: './pageprincipale.component.html',
  styleUrls: ['./pageprincipale.component.css']
})
export class PageprincipaleComponent implements OnInit, OnDestroy {


  autoBrandList:string[] = [];
  autoShortList:string[] = [];
  mySubscription:Subscription;

  fenetreMarques = false
  fenetreModeles = false

  constructor(private autoService:autoService) { 

  }

  ngOnInit(): void {
    this.mySubscription = this.autoService.mySubject.subscribe((data) => {
      this.autoBrandList = this.autoService.listeAuto.map(a => a)
      
      for (var i=0; i < this.autoBrandList.length; i++) {
        var b = this.autoBrandList[i]['Marque']
        if ( !this.autoShortList.includes(b)) {
          this.autoShortList.push(b)
        }
      }
    })

    if (this.autoBrandList.length == 0 || this.autoShortList.length == 0) {
      this.autoBrandList = this.autoService.listeAuto.map(a => a)

      for (var i=0; i < this.autoBrandList.length; i++) {
        var b = this.autoBrandList[i]['Marque']
        if ( !this.autoShortList.includes(b)) {
          this.autoShortList.push(b)
        }
      }
    }
  }

  afMarques() {
    this.fenetreMarques = !this.fenetreMarques
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe()
  }
}
