import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
//Service
import { ProductServiceService } from 'src/app/product-service.service';
//Product
//import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  // @Input() title:string = '';
  // @Input() price:number = 0;
  // @Input() img:string = '';
  // @Input() id:number = 0;

  // Hacemos el input del objeto (interaz)
  @Input() product: Product = {}
  constructor(private s:ProductServiceService) { }
  ngOnInit(): void {
  }
  //Aquí va el metodo que agrega los productos a la collecion en firebase
  onClick(){
    this.s.addProduct(this.product)
  }
}
