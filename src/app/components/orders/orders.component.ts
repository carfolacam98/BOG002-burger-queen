import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ClickorderService } from 'src/app/clickorder.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
items:Observable<any[]>
prueba!:string
  constructor(db:AngularFirestore,private a:ClickorderService) {
    this.items=db.collection('Orden1').valueChanges();
   }

  ngOnInit(): void { 
    
    this.a.EventClick
    .subscribe((data:string)=>this.prueba=data)
  }

}
