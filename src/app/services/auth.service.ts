import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userActive : any;

  constructor(private auth: Auth, private router: Router, private firestore : Firestore) { }
  

  async Login(email : string, password : string){
    return await signInWithEmailAndPassword(this.auth, email, password)
  
  }

  async Register(email : string, password : string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  getUser() {
    return this.userActive;
  }

  getUserEmail(){
    return this.userActive.email;
  }

  logout() {
    this.auth.signOut().then(() => this.router.navigate(['login']));
  }

  verificarAdmin(email : string){


  }

  obtenerUsuarios(): Observable<[]>{
    const usuarios = collection(this.firestore, 'usuarios')
    return collectionData(usuarios) as Observable<[]>
  }
}

