import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})

export class BreakfastComponent implements OnInit {
  
  breakfast: any = [];
  
  constructor(private http:BackendService) { }

  ngOnInit(): void {
    this.http.getBreakfast().subscribe(response => {
      console.log(response);
        this.breakfast = response;
    })
  }
}

//Patron de diseño : Injection de dependencias

// class Carro extends Vehiculo {
//   constructor(model, power) {

//   };
//   setColor(color){
//   this.color= color
//   }
// }

// let carroB = new Carro('mazda', 400)
// carroB.setColor('amarillo')




