import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Repartidores } from '../../models/repartidores';

@Component({
  selector: 'app-detalle-repartidor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-repartidor.component.html',
  styleUrl: './detalle-repartidor.component.css'
})
export class DetalleRepartidorComponent implements OnInit{

  @Input() repartidorDetalle : Repartidores | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
