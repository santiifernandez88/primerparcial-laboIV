import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Paises } from '../../models/paises';
import { PaisesService } from '../../services/paises.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-paises.component.html',
  styleUrl: './lista-paises.component.css'
})
export class ListaPaisesComponent implements OnInit{

  public paises!: Paises[];
  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(
    private listadoPaises: PaisesService
  ) { }

  ngOnInit(): void {
    this.listadoPaises.paisesObservable.subscribe(
      respuesta => {
        this.paises = new Array<Paises>();
        (respuesta as any).forEach((pais: any) => {
          if(pais.region == "europe" || pais.region == "africa")
          {
            let paisAux = new Paises(pais.alpha3Code, pais.translations.es, pais.flag, );
            this.paises?.push(paisAux)
          }
        });
        this.paises = this.paises.sort(this.compare)
    });
  }

  compare(paisA: Paises, paisB: Paises) {
    if (paisA.nombre < paisB.nombre) {
      return -1;
    }
    if (paisA.nombre > paisB.nombre) {
      return 1;
    }
    return 0;
  }

  seleccionarPais(nombrePais: string){
    this.paisSeleccionado.emit(nombrePais);
  }
}
