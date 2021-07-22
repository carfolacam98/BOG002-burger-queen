import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) {
  }
<<<<<<< HEAD
  getBreakfast = () => this.http.get<any[]>('http://localhost:3000/Desayunos')
=======

  getBreakfast = () => this.http.get<any[]>('http://localhost:3000/Desayunos')
  getHamburger = () => this.http.get('http://localhost:3000/Hamburguesas');
  getDrinks = () => this.http.get('http://localhost:3000/Bebidas');
>>>>>>> 477624f46156b8a419172dac3ba2dfe82abca06f
}
