import { Injectable, EventEmitter } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  loginWithGoogleProvider(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(){
    localStorage.removeItem('user');
    return this.auth.signOut();
  }

  getCurrentUser(){
    return this.auth.currentUser;
  }

  $User: EventEmitter<any> = new EventEmitter();
}
