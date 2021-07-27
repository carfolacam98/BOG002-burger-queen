import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocinaInitComponent } from './cocina-init/cocina-init.component';
import { MesasInitComponent } from './mesas-init/mesas-init.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { HttpClientModule } from '@angular/common/http';
import { HamburguerComponent } from './components/hamburguer/hamburguer.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { ProductViewComponent } from './components/shared/product-view/product-view.component';
import { OrdersComponent } from './components/orders/orders.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BackendService } from './backend.service';
import { ProductServiceService } from './product-service.service';


@NgModule({
  declarations: [
    AppComponent, 
    CocinaInitComponent,
    MesasInitComponent, 
    HomeComponent, HeaderComponent, NavComponent, BreakfastComponent, HamburguerComponent, DrinksComponent, ProductViewComponent, OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [
    BackendService,
    ProductServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
