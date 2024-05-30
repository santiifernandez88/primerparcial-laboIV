import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

  constructor(public firestore : Firestore) { }

  obtenerRepartidores(): Observable<[]>{
    const repartidores = collection(this.firestore, 'repartidores')
    return collectionData(repartidores) as Observable<[]>
  }

  actualizarRepartidores(nombre:string, dni:string, edad:string, capTransporte:string, unidadPropia:string, pais:string){
    let repartidorNuevo = {"nombre":nombre, "dni":dni, "edad":edad, "capTransporte":capTransporte, "unidadPropia":unidadPropia, "pais":pais}
    let repartidoresRef = collection(this.firestore, 'repartidores');
    addDoc(repartidoresRef, repartidorNuevo);
  }
}
