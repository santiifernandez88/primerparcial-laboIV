import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeladoService {

  constructor(private firestore: Firestore) { }

  obtenerHelados(): Observable<[]>{
    const helados = collection(this.firestore, 'helados')
    return collectionData(helados , {idField:'id'}) as Observable<[]>
  }

  crearHelado(nombre:string, precio:string, peso:string, tipo:string){
    let heladoNuevo = {"nombre":nombre, "precio":precio, "peso":peso, "tipo":tipo}
    let heladosRef = collection(this.firestore, 'helados');
    addDoc(heladosRef, heladoNuevo);
  }

  modificarHelado(id:string, precio:string, peso:string, tipo:string){
    let heladosRef = doc(this.firestore, 'helados', id);
    updateDoc(heladosRef, {
      precio: precio,
      peso: peso,
      tipo: tipo,
    })
  }

  eliminarHelado(id:string){
    let heladosRef = doc(this.firestore, 'helados', id);
    deleteDoc(heladosRef);
  }
}
