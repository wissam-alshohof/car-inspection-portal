import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, UserCredential, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, from, map, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  token: string | undefined;
  public get isLoggedIn$(): Observable<boolean> {
    this.token = this.userCredential.user?.accessToken || this.userCredential.user?.idToken;
    return from(this.token ? this.token : of(null)).pipe(map(value => !!value))
  }

  constructor(public auth: Auth) { }
  private _userCredential!: Pick<UserCredential, 'user'> & { user: { idToken?: string, accessToken?: string } } | null;
  get userCredential() {
    return this._userCredential || JSON.parse(localStorage.getItem('userCredential') ?? JSON.stringify({ user: null }))
  }

  set userCredential(user) {
    if(user) {
      this._userCredential = user;
      localStorage.setItem('userCredential', JSON.stringify({ user: { ...user.user, idToken: user.user.getIdToken() } }))
    }
  }
  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      (result: UserCredential) => {
        this.userCredential = { user: result.user };
      }
    ).then(_ => console.log(this.userCredential));

  }
  signup(email: string, password: string, userName: string) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      (user: any) => updateProfile(user.user, { displayName: userName })
    );
  }

  signOut() {
    return signOut(this.auth).then(() => {
      this.userCredential.user = null;
      this.token=undefined;
      localStorage.removeItem('userCredential');
    });
  }
}
