import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hoteles } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public url: string = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public sHttp: HttpClient) { }

  getToken(){
    const token2 = localStorage.getItem('token');
    if(token2 != undefined){
      this.token = token2
    }else{
     return this.token = '';
    }
  }

  getIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != undefined){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }

    return this.identidad;
  }

  agregarHotel(modeloHotel: Hoteles, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloHotel);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/agregarhotel', parametros, {headers: headersToken});
  }

  obtenerHotel(_token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.get(this.url + '/obtenerHoteles', {headers: headersToken});
  }

  editarHotel(modeloHotel: Hoteles, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloHotel);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.put(this.url + '/editarHotel/' + modeloHotel._id, parametros, {headers: headersToken});
  }

  eliminarHotel(idUsuario, _token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', this.token);
    return this.sHttp.put(this.url + '/eliminarHoteles/' + idUsuario, {headers: headersToken});
  }

  obtenerHotelId(idHotel, _token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', this.token);
    return this.sHttp.get(this.url + '/obtenerHotelesxId/' + idHotel, {headers: headersToken});
  }

  obtenerHotelNombre(modeloHotel: Hoteles, _token) : Observable<any> {
    let parametros = JSON.stringify(modeloHotel);
    let headersToken = this.headersVariable.set('Authorization', this.token)
    return this.sHttp.post(this.url + '/registrarUsuario', parametros, {headers: headersToken});
  }
}
