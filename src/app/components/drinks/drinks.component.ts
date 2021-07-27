import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drink!: Observable<any[]>;
  constructor(private http:BackendService) { }
  ngOnInit(): void {
  this.drink = this.http.getDrinks();
  }
}
