import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { BackendService } from 'src/app/backend.service';
>>>>>>> 477624f46156b8a419172dac3ba2dfe82abca06f

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
=======
  drink: any = [];
  constructor(private http:BackendService) { }

  ngOnInit(): void {
    this.http.getDrinks().subscribe(response => {
      this.drink = response;
    })
>>>>>>> 477624f46156b8a419172dac3ba2dfe82abca06f
  }

}
