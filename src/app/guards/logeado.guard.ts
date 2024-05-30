import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const logeadoGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  if(auth.getUser())
  {
    console.log("podes pasar");
    return true;
  }

  console.error("NO PODES PASAR, PRIMERO LOGUEATE");
  return false;
};
