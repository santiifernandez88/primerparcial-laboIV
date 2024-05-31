export class Helados{
    nombre! : string;
    tipo! : string;
    precio! : string;
    peso! : string;
    id! : string;

    constructor(nombre : string, tipo : string, peso : string, id : string){
        this.nombre = nombre;
        this.tipo = tipo;
        this.peso = peso;
        this.id = id;
    }
}