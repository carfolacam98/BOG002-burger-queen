import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/backend.service';


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css',]
})

export class BreakfastComponent implements OnInit {
  
  breakfast!: Observable<any[]>;
  
  constructor(private http:BackendService) { }

  ngOnInit(): void {
    this.breakfast = this.http.getBreakfast();
}
}

