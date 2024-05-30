import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(  public auth : AuthService, public router : Router){
    
  }

  CloseSession(){
    this.auth.logout();
    this.router.navigateByUrl("bienvenida");
  }


}
