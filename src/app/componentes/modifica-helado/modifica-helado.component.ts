import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Helados } from '../../models/helados';
import { HeladoService } from '../../services/helado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifica-helado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modifica-helado.component.html',
  styleUrl: './modifica-helado.component.css'
})
export class ModificaHeladoComponent implements OnInit, OnChanges{

  form!: FormGroup;
  @Input() heladoElegido : Helados | undefined;

  mensajeError: string | undefined;
  mensajeExito: string | undefined;

  constructor(
    private heladosServ : HeladoService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
      ingredientes: new FormControl('', Validators.required),
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
  get ingredientes(){
    return this.form.get('ingredientes');
  }

  ngOnChanges(changes: SimpleChanges) {

    if(changes['heladoElegido'].firstChange == false){
      this.form.controls['nombre'].disable();
      this.form.controls['nombre'].setValue(this.heladoElegido!.nombre);
      this.form.controls['precio'].setValue(this.heladoElegido!.precio);
      this.form.controls['peso'].setValue(this.heladoElegido!.peso);
      this.form.controls['tipo'].setValue(this.heladoElegido!.tipo);
    }
  }

  modificarHelado(){
    this.heladosServ.modificarHelado(this.heladoElegido?.id!, this.precio?.value, this.peso?.value, this.ingredientes?.value);
    this.nombre?.reset();
    this.precio?.reset();
    this.peso?.reset();
    this.ingredientes?.reset();
  }
}
