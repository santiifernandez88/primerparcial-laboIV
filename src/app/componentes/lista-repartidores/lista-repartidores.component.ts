import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repartidores } from '../../models/repartidores';
import { RepartidoresService } from '../../services/repartidores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-repartidores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-repartidores.component.html',
  styleUrl: './lista-repartidores.component.css'
})
export class ListaRepartidoresComponent implements OnInit{

  repartidores!: Repartidores[];
  @Output() repartidorElegido = new EventEmitter<Repartidores>();

  constructor(
    private repartidoresServ : RepartidoresService
  ) { }

  ngOnInit(): void {
    this.repartidoresServ.obtenerRepartidores().subscribe( respuesta => {
      this.repartidores = new Array<Repartidores>();
      respuesta.forEach((actor: any)=> {
        let repartidorAux = new Repartidores(actor.nombre, actor.dni, actor.edad, actor.capTransporte, actor.unidadPropia, actor.pais)
        this.repartidores?.push(repartidorAux);
      })
    })
  }

  clickLinea(item: Repartidores){
    this.repartidorElegido.emit(item);
  }
}
