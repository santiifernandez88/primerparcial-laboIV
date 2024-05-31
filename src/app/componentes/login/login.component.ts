import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password : string = "";
  rol : string = "";
  flagError : boolean = false;
  loggedUser: string = "";
  msjError : string = "";
  subUsuarios! : Subscription;

  constructor(private router: Router, public auth : AuthService) {}

  LoginUser() {
    this.auth.Login(this.email, this.password).then((res) => {
      if (res.user.email !== null) this.auth.userActive = res.user;
      this.goTo("bienvenida")
      this.flagError = false;
    }).catch((e) => {

      this.flagError = true;

      switch(e.code) {
        case "auth/invalid-email":
          this.msjError = "Email invalido";
          break;
        case "auth/invalid-credential":
          this.msjError = "El email o contraseña son incorrectos";
          break;
        case "auth/missing-password":
          this.msjError = "Por favor introduzca una contraseña";
          break;
        case "auth/too-many-requests":
          this.msjError = "Por favor ingrese bien sus datos";
          break;
        default:
          this.msjError = e.code
          break;
      }
    });
  }

  Rellenar(email : string, password : string){
    this.email = email;
    this.password = password;
  }


  goTo(path : string)
  {
    this.router.navigate([path]);
  }

  obtenerDatosUsuario(email: string){
    this.subUsuarios = this.auth.obtenerUsuarios().subscribe((mensaje) =>{
    mensaje.forEach(usuario => {
        if((usuario as any).email == email){
          this.email = (usuario as any).email;
          this.password = (usuario as any).password;
          this.rol = (usuario as any).rol;
        }
      })
    })
  }
}
