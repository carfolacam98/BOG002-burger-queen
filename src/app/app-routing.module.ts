import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocinaInitComponent } from './cocina-init/cocina-init.component';
import { MesasInitComponent } from './mesas-init/mesas-init.component';
import { HomeComponent } from './home/home.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { HamburguerComponent } from './components/hamburguer/hamburguer.component';
import { DrinksComponent } from './components/drinks/drinks.component';

const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'home'
},
{
  path:'mesas',
  pathMatch:'full',
  redirectTo:'mesas/breakfast'
},
   //preguntar por los children here
  { path: 'home', component: HomeComponent},
  { path: 'mesas', component: MesasInitComponent, children:[
    { path: 'breakfast', component: BreakfastComponent},
    { path: 'hamburgers', component: HamburguerComponent},
    { path: 'drinks', component: DrinksComponent}
  ] },  
  { path: 'cocina', component: CocinaInitComponent},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }


