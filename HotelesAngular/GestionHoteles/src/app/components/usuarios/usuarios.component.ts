import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  public usuarioModelGet: Usuario;
  public usuarioModelPost: Usuario;
  public usuarioModelGetId: Usuario;
  public token;

  constructor( 
    public sUsuario: UsuarioService,
    private _router: Router
             ) {
              this.usuarioModelPost = new Usuario(
                '',
                '',
                '',
                '',
                '',
                [],
                [],
                []
              );

              this.usuarioModelGetId = new Usuario(
                '',
                '',
                '',
                '',
                '',
                [],
                [],
                []
              );

              this.token = this.sUsuario.getToken();
   
            }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this.sUsuario.obtenerUsuario(this.token).subscribe(
      (response) => {
        this.usuarioModelGet = response.usuarioEncontrados;
        console.log(response);
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

postUsuario() {
    this.sUsuario.agregarUsuario( this.usuarioModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getUsuario();
        this.usuarioModelPost.nombre = "";
        this.usuarioModelPost.password = "";
        this.usuarioModelPost.username = ""
      },
      (err) => {
        console.log(<any>err);
      }
    )
  }

  putUsuario() {
    this.sUsuario.editarUsuario(this.usuarioModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getUsuario()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteUsuario(id) {
    this.sUsuario.eliminarUsuario(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getUsuario()
      },
      (err) => {
        
      }
    )
  }

  getUsuarioId(idUsuario){
    this.sUsuario.obtenerUsuarioId(idUsuario, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.usuarioModelGetId = response.userFinded;
      },
      (error)=>{

      }
    )
  }

  postAdminHotel() {
    this.sUsuario.agregarAdminHotel( this.usuarioModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getUsuario();
        this.usuarioModelPost.nombre = "";
        this.usuarioModelPost.password = "";
        this.usuarioModelPost.username = ""
      },
      (err) => {
        console.log(<any>err);
      }
    )
  }
}
