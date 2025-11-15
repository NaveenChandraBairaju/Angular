import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isBrowser =
    typeof window !== 'undefined' && typeof localStorage !== 'undefined';

  const isLoggedIn =
    isBrowser && localStorage.getItem('isLoggedIn') === 'true';
  // console.log(isLoggedIn);

  if (isLoggedIn) {
    return true;
  } else {
    // Only use alert / navigate in the browser
    if (isBrowser) {
      alert('Please log in to access your contact.');
      router.navigate(['/login']);
    }
    return false;
  }
};