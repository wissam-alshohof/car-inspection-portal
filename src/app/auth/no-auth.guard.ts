import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const noAuthGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  return authService.isLoggedIn$.pipe(map(
    isLoggedIn => isLoggedIn ? router.createUrlTree(['dashboard']):true
  )) ;
}
