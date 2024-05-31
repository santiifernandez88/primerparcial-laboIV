import { Component, OnInit } from '@angular/core';
import { Repartidores } from '../../models/repartidores';
import { DetallePaisComponent } from '../detalle-pais/detalle-pais.component';
import { DetalleRepartidorComponent } from '../detalle-repartidor/detalle-repartidor.component';
import { ListaRepartidoresComponent } from '../lista-repartidores/lista-repartidores.component';

@Component({
  selector: 'app-repartidorhome',
  standalone: true,
  imports: [DetallePaisComponent, DetalleRepartidorComponent, ListaRepartidoresComponent],
  templateUrl: './repartidorhome.component.html',
  styleUrl: './repartidorhome.component.css'
})
export class RepartidorhomeComponent implements OnInit{

  repartidor!: Repartidores;
  pais!:any;

  constructor() { }

  ngOnInit(): void {
  }

  repartidorSeleccionado(repartidor:any){
    this.repartidor = repartidor;
    this.pais = this.repartidor.pais;
  }
}
