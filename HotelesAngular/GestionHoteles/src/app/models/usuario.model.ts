export class Usuario {
    constructor(
      public _id: String,
      public nombre: String,
      public username: String,
      public rol: String,
      public password: String,
      public Hoteles: [],
      public habitacion: [],
      public Facturas: []
    ){}
}