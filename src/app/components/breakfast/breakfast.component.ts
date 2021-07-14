import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})

export class BreakfastComponent implements OnInit {
  
  breakfast: any = {};
  
  constructor(private http:BackendService) { }

  ngOnInit(): void {
    this.http.getBreakfast().subscribe(response => {
      console.log(response);
        this.breakfast = response;
    } )
  }
}
