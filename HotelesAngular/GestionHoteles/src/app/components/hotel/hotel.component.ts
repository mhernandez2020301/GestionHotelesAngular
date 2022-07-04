import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hoteles } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  providers: [HotelService]
})
export class HotelComponent implements OnInit {
  public hotelModelGet: Hoteles;
  public hotelModelPost: Hoteles;
  public hotelModelGetId: Hoteles;
  public token;

  constructor( 
    public sHotel: HotelService,
    private _router: Router
             ) {
              this.hotelModelPost = new Hoteles(
                '',
                '',
                '',
                [],
                [],
                []
              );

              this.hotelModelGetId = new Hoteles(
                '',
                '',
                '',
                [],
                [],
                []
              );

              this.token = this.sHotel.getToken();
   
            }

  ngOnInit(): void {
    this.getHotel();
  }

  getHotel() {
    this.sHotel.obtenerHotel(this.token).subscribe(
      (response) => {
        this.hotelModelGet = response.hoteles;
        console.log(response);
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

postHotel() {
    this.sHotel.agregarHotel( this.hotelModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.hotelModelPost.NombreHotel = "";
        this.hotelModelPost.direccionHotel = "";
        this.getHotel();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  putHotel() {
    this.sHotel.editarHotel(this.hotelModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getHotel()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteHotel() {
    this.sHotel.eliminarHotel(this.hotelModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getHotel()
      },
      (err) => {
        
      }
    )
  }

  getHotelId(idHotel){
    this.sHotel.obtenerHotelId(idHotel, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.hotelModelGetId = response.hotelfinded;
      },
      (error)=>{

      }
    )
  }

  /*getHotelN() {
    this.sHotel.obtenerUsuario(this.token).subscribe(
      (response) => {
        this.usuarioModelGet = response.usuarioEncontrados;
        console.log(response);
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }*/
}
