import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import * as firebase from 'firebase/app';


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
  incrementProduct = (item: Product) => {
    const increment = firebase.default.firestore.FieldValue.increment(1)
    const itemCount: any = this.itemsCollection.doc(`${item.id}`)
    itemCount.update({ count: increment });
  }
}
