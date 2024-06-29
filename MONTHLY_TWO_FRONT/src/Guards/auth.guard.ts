import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const auth = inject(AuthServiceService)


  if (auth.showStatus()) {
    return true
  } else {
    router.navigate(['/login'])
    return false
  }
};
