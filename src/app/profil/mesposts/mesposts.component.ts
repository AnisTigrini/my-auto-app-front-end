import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesposts',
  templateUrl: './mesposts.component.html',
  styleUrls: ['./mesposts.component.css']
})
export class MespostsComponent implements OnInit {

  autoList;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.post("http://localhost:5000/api/mes_auto", {'token':localStorage.getItem('token')}, {'headers': new HttpHeaders().set('content-type', 'application/json')})
    .subscribe((response) => {
      if (response["reponse"] == "success") {
        this.autoList = response["autos"]
        console.log(this.autoList)
      }
    })
  }

  handler(refel) {
    for (var i = 0; i < this.autoList.length; i++) {
      if (this.autoList[i].idpost == refel.innerHTML) {
        this.autoList = this.autoList.filter(obj => obj !== this.autoList[i]);
        this.http.post("http://localhost:5000/api/supprimer_autos", {'token':localStorage.getItem('token'), "idpost":refel.innerHTML}, {'headers': new HttpHeaders().set('content-type', 'application/json')})
        .subscribe((response) => {
          console.log(response)
        })
      }
    }
  }
}
