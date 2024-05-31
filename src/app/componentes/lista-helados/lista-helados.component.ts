import { Component, EventEmitter, Output } from '@angular/core';
import { Helados } from '../../models/helados';
import { HeladoService } from '../../services/helado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-helados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-helados.component.html',
  styleUrl: './lista-helados.component.css'
})
export class ListaHeladosComponent {

  helados!: Helados[];
  @Output() heladoElegido = new EventEmitter<Helados>();

  constructor(
    private heladosServ : HeladoService
  ) { }

  ngOnInit(): void {
    this.heladosServ.obtenerHelados().subscribe( respuesta => {
      this.helados = new Array<Helados>();
      respuesta.forEach((helado: any)=> {
        let heladoAux = new Helados(helado.nombre, helado.tipo, helado.precio, helado.peso)
        this.helados?.push(heladoAux);
      })
    })
  }

  clickLinea(item: Helados){
    this.heladoElegido.emit(item);
  }
}
