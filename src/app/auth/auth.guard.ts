import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  return authService.isLoggedIn$.pipe(map(
    isLoggedIn => isLoggedIn ? true : router.createUrlTree([''])
  )) ;
};
