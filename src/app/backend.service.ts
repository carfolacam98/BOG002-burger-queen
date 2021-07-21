import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) {
  }
  getBreakfast = () => this.http.get('http://localhost:3000/Desayunos');
  getHamburger = () => this.http.get('http://localhost:3000/Hamburguesas');
  getDrinks = () => this.http.get('http://localhost:3000/Bebidas');
}
