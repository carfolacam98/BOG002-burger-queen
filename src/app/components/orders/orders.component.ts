import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
//Importamos interfaz del producto
import { Product } from 'src/app/models/product';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  products: Product[] = [];
  item:any={userName:''}

  constructor(private s: ProductServiceService) { }

  ngOnInit(): void {
    this.s.itemsCollection
      .snapshotChanges()
      .subscribe(item => {
        this.products = item.map(product => {
          let id = product.payload.doc.id
          return ({ id, ...product.payload.doc.data() });
        })
      })
  };

  delete(product: Product) {
    this.s.deleteP(product)
  }
  productCounting(product: Product) {

    this.s.incrementProduct(product)

  }

  productDecrease(product: Product) {
    this.s.decrementProduct(product)
  }
 agregar(){
   this.s.addProduct(this.item)
   this.item.name=""
 }
}
