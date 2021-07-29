import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/backend.service';
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  extra!: Observable<any[]>;
  constructor(private http:BackendService) { }
  ngOnInit(): void {
    this.extra = this.http.getExtra();

}}
