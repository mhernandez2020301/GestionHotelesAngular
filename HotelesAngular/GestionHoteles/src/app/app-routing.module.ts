import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './components/hotel/hotel.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AdminhGuard } from './guards/adminh.guard';
import { InicioGuard } from './guards/inicio.guard';

const routes: Routes = [
  {path: '', component: MainComponent, canActivate:[InicioGuard], children:[
    {path: 'usuarios', component: UsuariosComponent},  
    {path: 'hoteles', component: HotelComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: HotelComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// canActivate:[InicioGuard],
