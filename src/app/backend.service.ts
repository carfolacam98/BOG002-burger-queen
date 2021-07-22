import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) {
  }
  getBreakfast = () => this.http.get<any[]>('http://localhost:3000/Desayunos')
}
