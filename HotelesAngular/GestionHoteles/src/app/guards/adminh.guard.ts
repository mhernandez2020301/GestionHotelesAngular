import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service'

@Injectable({
  providedIn: 'root'
})

export class AdminhGuard implements CanActivate {

  public identidad;

  constructor(
    public router: Router,
    public userRest: UsuarioService
  ){}

  canActivate(){
    if(this.userRest.getIdentidad().rol === "ROL_AdminHotel"){
      this.router.navigate(['/']);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}

