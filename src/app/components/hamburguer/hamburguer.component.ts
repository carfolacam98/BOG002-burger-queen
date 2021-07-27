import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hamburguer',
  templateUrl: './hamburguer.component.html',
  styleUrls: ['./hamburguer.component.css']
})
export class HamburguerComponent implements OnInit {
  hamburger!: Observable<any[]>;
  constructor(private http:BackendService) { }
  ngOnInit(): void {
    this.hamburger = this.http.getHamburger();
  }
}



