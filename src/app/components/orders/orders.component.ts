import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
//Importamos interfaz del producto
import { Product } from 'src/app/models/product';
import { FormBuilder,FormGroup, Validators,FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  products: Product[] = [];
  name:any={userName:''};
  objectProduct=[];
  // orderForm:FormGroup;

//  each!:number
  constructor(private s: ProductServiceService
    ,private db:AngularFirestore
    ,public fb:FormBuilder
    ) {}
    // {this.orderForm=new FormGroup({
    //   'userName':new FormControl('userName',[ Validators.required,]),
  
orderForm=this.fb.group({
  userName:[''],
})
  ngOnInit(): void {
    this.main();
    this.guardarOrder()
    // console.log(this.orderForm.value);
    // this.guardarOrder()
    // this.change()
    // this.orderForm=this.fb.group({
    //  ['',Validators.required],
     
    // })
   
  };
  submit(){
    this.db.collection('prueba').doc('DPjkpt0NNildJQLH0pbo').update({
    
      cliente: this.orderForm.value})
  }
  change(arrayOrder:any){
    
    
  //const newProduct = {name: 'productName', price: 0, cart: true, supermarket: 'Ninguno', bought: false};
  arrayOrder.forEach((element: any) => {
      this.db.collection('prueba').doc('DPjkpt0NNildJQLH0pbo').update({
        producto: firebase.default.firestore.FieldValue.arrayUnion(element)
      })
    });
    // this.orderForm.reset();
  
  }
  
 guardarOrder(){
  
    this.db.collectionGroup('prueba'), (ref: { where: (arg0: string, arg1: string, arg2: any) => any; }) => console.log(ref.where('producto', '!=', undefined))}
    
    
 
  
//       needed(){
//         this.s.itemsCollection
//         .snapshotChanges()
//         .subscribe(item => {
//           this.Local=item.map(product => {
//             let id = product.payload.doc.id;
//             let data=product.payload.doc.data();
//              ({ id, ... data });
//              return data
//           })
//         })
//        }    
    main(){
      this.s.itemsCollection
      .snapshotChanges()
      .subscribe(item => {
        this.products = item.map(product => {
          let id = product.payload.doc.id;
          return ({ id, ...product.payload.doc.data() });
          
      
        })
        this.change(this.products)
      })
     }
    
      delete(product: Product) {
        this.s.deleteP(product)
      }
      productCounting(product: Product) {
    
        this.s.incrementProduct(product)
        
    
      }
    
      productDecrease(product: Product) {
        this.s.decrementProduct(product)
      }
     
    }
 
  // total (product: Product) {
  //   let each=(product.price||0)*(product.count||0);
  //   console.log(each)
  //   this.Total.push(each);
  //   this.Total.reduce((a:any, b:any) => a + b, 0);
  //   console.log(this.Total)
  // }   

