import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drink: any = [];
  constructor(private http:BackendService) { }

  ngOnInit(): void {
    this.http.getDrinks().subscribe(response => {
      this.drink = response;
    })
  }

}
