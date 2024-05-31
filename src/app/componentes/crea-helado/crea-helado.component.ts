import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crea-helado',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crea-helado.component.html',
  styleUrl: './crea-helado.component.css'
})
export class CreaHeladoComponent {

  form!: FormGroup;
  mensajeError: string | undefined;
  mensajeExito: string | undefined;
  @Output() heladoCreado = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
    });
  }

  get nombre(){
    return this.form.get('nombre');
  }
  get precio(){
    return this.form.get('precio');
  }
  get peso(){
    return this.form.get('peso');
  }
  get tipo(){
    return this.form.get('tipo');
  }

  crearHelado(){
    if(this.evaluarErrorInputs()){
      this.heladoCreado.emit({
        "nombre": this.nombre?.value,
        "precio": this.precio?.value,
        "peso": this.peso?.value,
        "tipo":this.tipo?.value
      })
      this.mostrarMensajeExito();
    };
  }

  evaluarErrorInputs() : boolean{

    if(!this.nombre?.valid){
      this.mensajeError = "El campo 'Nombre' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.precio?.valid){
      this.mensajeError = "El campo 'Precio' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.peso?.valid){
      this.mensajeError = "El campo 'Peso' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    if(!this.tipo?.valid){
      this.mensajeError = "El campo 'Tipo' no es válido."
      this.mostrarMensajeError();
      return false;
    }
    return true;
  }

  mostrarMensajeExito(){
    this.mensajeExito = "El helado se creó con éxito.";
    setTimeout(() =>{ this.mensajeExito = undefined }, 2500);
  }

  mostrarMensajeError(){
    setTimeout(() =>{ this.mensajeError = undefined }, 2500);
  }
}
