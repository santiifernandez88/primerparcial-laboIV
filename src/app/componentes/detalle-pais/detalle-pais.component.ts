import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Paises } from '../../models/paises';
import { PaisesService } from '../../services/paises.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css'
})
export class DetallePaisComponent implements OnInit, OnDestroy, OnChanges{

  subsPaises! : Subscription;
  @Input() paisDetalle : string | undefined;
  paises!: Paises[];
  paisElegido! : Paises;

  constructor(
    private listadoPaises: PaisesService
  ) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['paisDetalle'].firstChange == false){
      if(this.paises != undefined){
        this.paises.forEach( (pais)=>{
          if(pais.nombre == this.paisDetalle){
            this.paisElegido = pais;
          }
        })
      }
    }
  }

  ngOnDestroy(){
    this.subsPaises.unsubscribe();
  }

  cargarPaises(){
    this.subsPaises = this.listadoPaises.paisesObservable.subscribe(
      respuesta => {
        this.paises = new Array<Paises>();
        (respuesta as any).forEach((pais: any) => {
          let paisAux = new Paises(pais.alpha3Code, pais.translations.es, pais.flag);
          this.paises?.push(paisAux)
        });
    });
  }
}
