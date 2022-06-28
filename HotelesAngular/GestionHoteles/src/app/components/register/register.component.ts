import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UsuarioService]
})
export class RegisterComponent implements OnInit {

  user;
  repeatPass:string = '';

  constructor(private userRest: UsuarioService,
    private router: Router) { 
      this.user = new Usuario(
        "",
        "",
        "",
        "",
        "",
        [],
        [],
        []
      );
    }

  ngOnInit(): void {
  }

  checkPass(){
    let validate: boolean = false;
    if(this.repeatPass != this.user.password){
      return validate = false;
    }else{
      return validate = true;
    }
  }


register(){

  if(this.checkPass() === true){

    this.userRest.register(this.user).subscribe({
      next: (response:any)=>{
        alert("Usuario creado satisfactoriamente");
      },
      error: (err)=> console.log(err.error.mensaje)
    });
  } else{
    alert('La contraseña no coincide :(')
  }

}

}
