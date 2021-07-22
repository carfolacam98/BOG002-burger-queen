import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
 datohijo:any="sin datos"
  constructor() { }

  ngOnInit(): void {
  }
  funCambiar(e:string){
    console.log(e)
    this.datohijo=e}
    
}
