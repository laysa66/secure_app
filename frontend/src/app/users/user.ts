import { inject, Injectable, signal } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { UserDto } from '../types/user-dto'
import { catchError, of, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http = inject(HttpClient)

  // Liste des utilisateurs (signal)
  private readonly _users = signal<UserDto[]>([])
  readonly users = this._users.asReadonly()

  // Charge tous les utilisateurs depuis l'API
  loadAll() {
    this.http.get<UserDto[]>(
      `${environment.apiUrl}/users`,
      { withCredentials: true }
    ).pipe(
      tap(users => {
        this._users.set(users)
        console.log(' Utilisateurs chargés:', users)
      }),
      catchError(err => {
        console.error(' Erreur lors du chargement des utilisateurs', err)
        this._users.set([])
        return of([])
      })
    ).subscribe()
  }
}