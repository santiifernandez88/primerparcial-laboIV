import { Injectable } from '@angular/core';
import { Paises } from '../models/paises';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  public paisesObservable!: Observable<Paises[]>;
  public paises!: Subject<Paises[]>;

  constructor( private httpClient: HttpClient) {
    this.paises = new Subject();
    this.paisesObservable = this.paises.asObservable();
    this.httpClient.get(`https://restcountries.com/v2/all`
    ).subscribe(respuesta =>{
      this.paises.next(respuesta as any);
    });
  }
}
