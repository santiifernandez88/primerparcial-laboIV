import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GithubService } from '../../services/github.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent implements OnInit, OnDestroy{

  subsDatos! : Subscription;
  usuario! : string;
  imagen! : string;
  cantidadRepos! : string;

  constructor(
  
    private gitServ : GithubService
  ) {
    this.gitServ.obtenerDatos();
  }

  ngOnInit(): void {
    this.subsDatos = this.gitServ.datos.subscribe( respuesta => {
      this.usuario = respuesta.login;
      this.imagen = respuesta.avatar_url;
      this.cantidadRepos = respuesta.public_repos;
    });
  }

  ngOnDestroy(){
    this.subsDatos.unsubscribe();
  }

}
