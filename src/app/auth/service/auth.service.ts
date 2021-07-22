import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  isLoggedIn() {
    this.auth.onAuthStateChanged((user) => {
      if (user)
        return true
      else
        return false
    })
  }
}
