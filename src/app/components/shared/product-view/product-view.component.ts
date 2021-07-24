import { Component, Input, OnInit } from '@angular/core';
import { ClickorderService } from 'src/app/clickorder.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() title:string = '';
  @Input() price:number = 0;
  @Input() img:string = '';

  constructor(private s:ClickorderService) { }

  ngOnInit(): void {
  }
  onclick(){
    this.s.Clickorder(this.title)
  }}

