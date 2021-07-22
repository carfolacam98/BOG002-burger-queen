import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/backend.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css',]
})

export class BreakfastComponent implements OnInit {
  
  breakfast!: Observable<any[]>;
  
  constructor(private http:BackendService) { }

  ngOnInit(): void {
    //subscribe permite tener info un observable
    //pipe eising
    //getbreakfast es una funcion que se trajo desde backend y 
    //el any es una propiedad de observables,creo qeu es el que permite hacerme switch a un observable
    this.breakfast=this.http.getBreakfast()
   
    // .subscribe(response => {
      // console.log(response);
      //   this.breakfast = response;
      //   this.breakFastList=Object.values(this.breakfast[0][1])
      //    console.log('que es?', Object.values(this.breakfast[0][1]))
    
    // })
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




