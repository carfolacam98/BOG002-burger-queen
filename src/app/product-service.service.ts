import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  itemsCollection: AngularFirestoreCollection<Product>;
  items: Observable<Product[]>;

  constructor( private s:AngularFirestore ) {
    this.itemsCollection = this.s.collection<Product>('items');
    this.items = this.itemsCollection.valueChanges();
  }
  addProduct = (item: Product) => this.itemsCollection.add(item);
}
