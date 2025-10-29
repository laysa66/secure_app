import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../auth/auth'

// guard la police d'authentification

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  
  // Si l'utilisateur est connecté, on le laisse passer
  if (authService.isLoggedIn()) {
    return true
  }
  
  // Sinon, on le redirige vers la page de login
  router.navigate(['/login'])
  return false
}