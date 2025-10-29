import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../auth/auth'

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  
  // Si l'utilisateur est admin, on le laisse passer
  if (authService.isAdmin()) {
    return true
  }
  
  // Sinon, on le redirige vers home
  console.warn('Accès refusé : admin uniquement')
  router.navigate(['/home'])
  return false
}