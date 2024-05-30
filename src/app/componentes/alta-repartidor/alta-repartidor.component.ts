import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RepartidoresService } from '../../services/repartidores.service';
import { CommonModule } from '@angular/common';
import { ListaPaisesComponent } from '../lista-paises/lista-paises.component';

@Component({
  selector: 'app-alta-repartidor',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ListaPaisesComponent],
  templateUrl: './alta-repartidor.component.html',
  styleUrl: './alta-repartidor.component.css'
})

export class AltaRepartidorComponent implements OnInit{
  formulario!: FormGroup;
  mensajeError: string | undefined;
  mensajeExito: string | undefined;

  unidadPropia : string | undefined;
  pais : string | undefined;

  constructor(
    private repartidores: RepartidoresService
  ) {
    this.unidadPropia = undefined;
    this.pais = undefined;
  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
      dni: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required, Validators.minLength(6), Validators.maxLength(9)]),
      edad: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.min(18), Validators.max(99), Validators.required]),
      capTransporte: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.required]),
    });
  }

  get nombre(){
    return this.formulario.get('nombre');
  }
  get dni(){
    return this.formulario.get('dni');
  }
  get edad(){
    return this.formulario.get('edad');
  }
  get capTransporte(){
    return this.formulario.get('capTransporte');
  }

  crearRepartidor(){
    if(this.evaluarErrorInputs()){
      this.repartidores.actualizarRepartidores(this.nombre?.value,this.dni?.value,this.edad?.value,this.capTransporte?.value,this.unidadPropia!, this.pais!);
      this.mostrarMensajeExito();
    };
  }

  verUnidad(evento: any){
    if(evento.srcElement.value != "invalido"){
      this.unidadPropia = evento.srcElement.value;
    }else{
      this.unidadPropia = undefined;
    }
  }

  recibirPaisSelect(nombrePais: string){
    this.pais = nombrePais;
  }

  evaluarErrorInputs() : boolean{

    if(!this.nombre?.valid){
      this.mensajeError = "El campo 'Nombre' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.dni?.valid){
      this.mensajeError = "El campo 'DNI' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.edad?.valid){
      this.mensajeError = "El campo 'Edad' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.capTransporte?.valid){
      this.mensajeError = "El campo 'Capacidad de Transporte' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(this.unidadPropia == undefined){
      this.mensajeError = "Debe seleccionar si posee unidad propia."
      this.mostrarMensajeError();
      return false;
    }
    else if(this.pais == undefined){
      this.mensajeError = "Debe seleccionar un pais"
      this.mostrarMensajeError();
      return false;
    }
    return true;
  }

  mostrarMensajeExito(){
    this.mensajeExito = "El repartidor se creó con éxito.";
    setTimeout(() =>{ this.mensajeExito = undefined }, 2500);
  }

  mostrarMensajeError(){
    setTimeout(() =>{ this.mensajeError = undefined }, 2500);
  }
}


