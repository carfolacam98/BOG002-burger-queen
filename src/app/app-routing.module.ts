import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocinaInitComponent } from './cocina-init/cocina-init.component';
import { MesasInitComponent } from './mesas-init/mesas-init.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {
     path:'',
     pathMatch:'full',
redirectTo:'home'
   },
   //preguntar por los children here
   {path: 'home', component: HomeComponent},

    { path: 'mesas', component: MesasInitComponent },  
    { path: 'cocina', component: CocinaInitComponent},
    
     
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


