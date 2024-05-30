import { Routes } from '@angular/router';
import { logeadoGuard } from './guards/logeado.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/bienvenida', pathMatch: "full" },
    { path: 'bienvenida',
      loadComponent: () => 
        import('./componentes/bienvenida/bienvenida.component').then(
            (c) => c.BienvenidaComponent
        ),
      title: 'Bienvenido'
    },
    { path: 'login',
      loadComponent: () => 
        import('./componentes/login/login.component').then(
            (c) => c.LoginComponent
        ),
      title: 'Login'
    },
    { path: 'altaRepartidor',
      loadComponent: () => 
        import('./componentes/alta-repartidor/alta-repartidor.component').then(
            (c) => c.AltaRepartidorComponent
        ),
      title: 'Alta repartidor',
      canActivate: [logeadoGuard]
    }
];
