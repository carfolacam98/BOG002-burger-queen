import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-hamburguer',
  templateUrl: './hamburguer.component.html',
  styleUrls: ['./hamburguer.component.css']
})
export class HamburguerComponent implements OnInit {
  hamburger: any = [];
  constructor(private http:BackendService) { }

  ngOnInit(): void {
    this.http.getHamburger().subscribe(response => {
      console.log(response);
        this.hamburger = response;
    })
  }

}



