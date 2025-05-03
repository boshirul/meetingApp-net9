import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/User';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  currentUser = signal<User | null>(null);
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: any) => {
        localStorage.setItem('user', JSON.stringify(response));
        this.currentUser.set(response);
      }));
  }

  constructor() { }
}
