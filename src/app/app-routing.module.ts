import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocinaInitComponent } from './cocina-init/cocina-init.component';
import { MesasInitComponent } from './mesas-init/mesas-init.component';
import { HomeComponent } from './home/home.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';

const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'home'
},
   //preguntar por los children here
  { path: 'home', component: HomeComponent},
  { path: 'mesas', component: MesasInitComponent, children:[
    { path: 'breakfast', component: BreakfastComponent}
  ] },  
  { path: 'cocina', component: CocinaInitComponent},
  { path: 'menu', component: BreakfastComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


