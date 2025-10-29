import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../auth/auth'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})


export class LoginComponent {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  // Variables du formulaire
  login = ''
  password = ''

  // États exposés depuis le service
  readonly isLoading = this.authService.isLoading
  readonly error = this.authService.error
  readonly isLoggedIn = this.authService.isLoggedIn

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (!this.login || !this.password) {
      return
    }

    // Appel du service d'authentification
    this.authService.login(this.login, this.password)

    // Surveiller la connexion réussie pour rediriger
    const checkLogin = setInterval(() => {
      if (this.isLoggedIn()) {
        clearInterval(checkLogin)
        this.router.navigate(['/home']) //acceuil 
      }
    }, 100)
  }
}