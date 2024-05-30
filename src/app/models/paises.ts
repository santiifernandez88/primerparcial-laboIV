export class Paises {
    denominacion!: string;
    nombre!: string;
    bandera: string | undefined;
  
    constructor(denominacion:string, nombre: string, bandera: string){
      this.denominacion = denominacion;
      this.nombre = nombre;
      this.bandera = bandera;
    }
  }