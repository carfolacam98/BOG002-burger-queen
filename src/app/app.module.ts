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
<<<<<<< HEAD
// import { CardsComponent } from './cards/cards.component';
// import { DrinksComponent } from './drinks/drinks.component';
=======
import { HamburguerComponent } from './components/hamburguer/hamburguer.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { ProductViewComponent } from './components/shared/product-view/product-view.component';
import { OrdersComponent } from './components/orders/orders.component';
>>>>>>> 477624f46156b8a419172dac3ba2dfe82abca06f

// comentario
@NgModule({
  declarations: [
    AppComponent, 
    CocinaInitComponent,
    MesasInitComponent, 
<<<<<<< HEAD
    HomeComponent, HeaderComponent, NavComponent, BreakfastComponent,
    //  CardsComponent, 
    
=======
    HomeComponent, HeaderComponent, NavComponent, BreakfastComponent, HamburguerComponent, DrinksComponent, ProductViewComponent, OrdersComponent,
>>>>>>> 477624f46156b8a419172dac3ba2dfe82abca06f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
