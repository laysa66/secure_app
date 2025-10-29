import { Component, inject } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { AuthService } from './auth/auth'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  readonly authService = inject(AuthService)
  
  // États exposés
  readonly isLoggedIn = this.authService.isLoggedIn
  readonly isAdmin = this.authService.isAdmin
  readonly currentUser = this.authService.currentUser
}