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

// comentario
@NgModule({
  declarations: [
    AppComponent, 
    CocinaInitComponent,
    MesasInitComponent, 
    HomeComponent, HeaderComponent, NavComponent, BreakfastComponent, HamburguerComponent, DrinksComponent, ProductViewComponent,
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
