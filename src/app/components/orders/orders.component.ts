import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  products: Product[] = [];
  product!: Product;
  
  constructor( private s:ProductServiceService) { }

  ngOnInit(): void {
    this.s.itemsCollection
    .snapshotChanges()
    .subscribe(item => {
    this.products = [];
    item.forEach(product => {
      let data = product.payload.doc.data();
      let id = product.payload.doc.id;
      this.products.push({id, ...data});
    })
})

  }
  delete(product: Product){
    this.s.deleteP(product)
  }

  increase(product: Product) {
    this.s.incrementProduct(product)
    // this.counter = this.s.totalPrice(product)
  }

  // sum(product: Product) {
  // this.s.totalPrice(product)
  // }
}

