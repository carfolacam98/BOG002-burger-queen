import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocinaInitComponent } from './cocina-init/cocina-init.component';
import { MesasInitComponent } from './mesas-init/mesas-init.component';
import { HomeComponent } from './home/home.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { DrinksComponent } from './components/drinks/drinks.component';
// import { CardsComponent } from './cards/cards.component';
const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'home'
},
   //preguntar por los children here
  { path: 'home', component: HomeComponent},
  { path: 'mesas', component: MesasInitComponent, children:[
    // { path: 'cards', component: CardsComponent},
    { path: 'breakfast', component: BreakfastComponent},
    { path: 'drinks', component: DrinksComponent}
  ] },  
  { path: 'cocina', component: CocinaInitComponent},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


