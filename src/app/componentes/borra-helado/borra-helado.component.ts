import { Component, Input, OnInit } from '@angular/core';
import { Helados } from '../../models/helados';
import { HeladoService } from '../../services/helado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-borra-helado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './borra-helado.component.html',
  styleUrl: './borra-helado.component.css'
})
export class BorraHeladoComponent implements OnInit{

  
  @Input() heladoElegido : Helados | undefined;

  constructor(
    private heladosService : HeladoService
  ) { }

  ngOnInit(): void {
  }

  borrarHelado(){
    this.heladosService.eliminarHelado(this.heladoElegido?.id!);
    this.heladoElegido = undefined;
  }

}
