import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocinaInitComponent } from './cocina-init/cocina-init.component';
import { MesasInitComponent } from './mesas-init/mesas-init.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClient } from '@angular/common/http';
import { BreakfastComponent } from './components/breakfast/breakfast.component';

// comentario
@NgModule({
  declarations: [
    AppComponent, 
    CocinaInitComponent,
    MesasInitComponent, 
    HomeComponent, HeaderComponent, NavComponent, BreakfastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
