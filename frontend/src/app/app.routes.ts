import { Routes } from '@angular/router'
import { LoginComponent } from './login/login'
import { HomeComponent } from './home/home'
import { AdminComponent } from './admin/admin/admin'
import { authGuard } from './guards/auth-guard-guard'
import { adminGuard } from './guards/admin-guard'

export const routes: Routes = [
  { // accessible a tous 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'home', 
    component: HomeComponent, 
    canActivate: [authGuard] // protection par authGuard
  },
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [authGuard, adminGuard]  // protection par authGuard et adminGuard
  },
  { 
    path: '', // redirection par défaut vers home
    pathMatch: 'full', 
    redirectTo: 'home' 
  },
  { 
    path: '**', // tute les autres routes non définies rederigent vers home
    redirectTo: 'home' 
  }
]