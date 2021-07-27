import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
//Importamos interfaz del producto
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  products: Product[] = [];

  constructor( private s:ProductServiceService) { }

  ngOnInit(): void {
    this.s.itemsCollection
    .snapshotChanges()
    .subscribe(item => {
    this.products = [];
    item.forEach(product => {
      let data = product.payload.doc.data();
      // let id = product.payload.doc.id;
      console.log('que es?', data)
      this.products.push(data as Product);
    })
})
  }
}

