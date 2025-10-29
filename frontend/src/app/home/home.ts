import { Component, inject, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  readonly authService = inject(AuthService)
  
  // États exposés
  readonly currentUser = this.authService.currentUser
  readonly isLoggedIn = this.authService.isLoggedIn

  ngOnInit() {
    // Vérifie qui est connecté au chargement de la page
    this.authService.whoami()
  }

  // Méthode de déconnexion
  logout() {
    this.authService.logout()
  }
}