import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
items:Observable<any[]>
  constructor(db:AngularFirestore) {
    this.items=db.collection('Orden1').valueChanges();
   }

  ngOnInit(): void {
  }

}
