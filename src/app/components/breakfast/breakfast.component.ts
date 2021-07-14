import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Breakfast {
  constructor(
    public name: string,
    public img: string,
    public precio: number,
    ) {
  }
}

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})

export class BreakfastComponent implements OnInit {
  
  breakfast: Breakfast[] = [];
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getBreakfast()
  }

  getBreakfast = () => {
    this.http.get<any>('http://localhost:3000/Desayunos').subscribe(
      response => {
        console.log(response);
        this.breakfast = response;
      }
    );
  }

}
