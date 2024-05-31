import { Component, OnInit } from '@angular/core';
import { Helados } from '../../models/helados';
import { HeladoService } from '../../services/helado.service';
import { ListaHeladosComponent } from '../lista-helados/lista-helados.component';
import { CreaHeladoComponent } from '../crea-helado/crea-helado.component';
import { ModificaHeladoComponent } from '../modifica-helado/modifica-helado.component';
import { BorraHeladoComponent } from '../borra-helado/borra-helado.component';

@Component({
  selector: 'app-heladoshome',
  standalone: true,
  imports: [ListaHeladosComponent, CreaHeladoComponent, ModificaHeladoComponent, BorraHeladoComponent],
  templateUrl: './heladoshome.component.html',
  styleUrl: './heladoshome.component.css'
})
export class HeladoshomeComponent implements OnInit{

  helado!: Helados;

  constructor(
    private helados: HeladoService
  ) { }

  ngOnInit(): void {
  }

  heladoSeleccionado(helado:any){
    this.helado = helado;
  }

  crearHelado(heladoACrear:any){
    this.helados.crearHelado(heladoACrear.nombre,heladoACrear.precio,heladoACrear.peso,heladoACrear.tipo)
  }

}
