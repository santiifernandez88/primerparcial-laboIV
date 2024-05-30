export class Repartidores {
    nombre! : string;
    dni! : string;
    edad! : string;
    capTransporte! : string;
    unidadPropia! : string;
    pais! : string;
  
    constructor(nombre:string, dni:string, edad: string, capTransporte:string, unidadPropia:string, pais:string){
      this.nombre = nombre;
      this.dni = dni;
      this.edad = edad;
      this.capTransporte = capTransporte;
      this.unidadPropia = unidadPropia;
      this.pais = pais;
    }
  }