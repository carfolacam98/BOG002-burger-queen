import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocinaInitComponent } from './cocina-init/cocina-init.component';
import { MesasInitComponent } from './mesas-init/mesas-init.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   
   
   //preguntar por el redirect aqui
   {path: 'home', component: HomeComponent,
   children: [
    { path: 'cocina', component: CocinaInitComponent},
    { path: 'mesas', component: MesasInitComponent },         
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


