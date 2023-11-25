import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, UserCredential, signOut } from '@angular/fire/auth';
import { Observable, from, map, of } from "rxjs";
import { InterceptorService } from '../interceptor.service';
import { ToastService } from '../shared/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  token: string | undefined;
  public get isLoggedIn$(): Observable<boolean> {
    this.token = this.userCredential.user?.accessToken || this.userCredential.user?.idToken;
    return from(this.token ? this.token : of(null)).pipe(map(value => !!value))
  }

  constructor(
    public auth: Auth, 
    private loadingService: InterceptorService,
    private toast: ToastService) { }
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
    this.loadingService.showLoader();
    return signInWithEmailAndPassword(this.auth, email, password).then(
      (result: UserCredential) => {
        this.userCredential = { user: result.user };
        this.toast.showSuccess("Logged In Successfully");
        this.loadingService.hideLoader();
      }
    ).catch(error => {
      this.loadingService.hideLoader();
      this.toast.showError("Invalid Email or Password")
    });

  }
  signup(email: string, password: string, userName: string) {
    this.loadingService.showLoader();
    return createUserWithEmailAndPassword(this.auth, email, password)
    .catch(error => {
      this.toast.showError("This Email already exist")
      this.loadingService.hideLoader();
    })
    .then(
      (user: any) => {
        this.loadingService.hideLoader();
        return updateProfile(user.user, { displayName: userName });
      }
      ).catch(error => {
        this.toast.showError("Something went wrong..")
        this.loadingService.hideLoader()
      });
    }
    
    signOut() {
      return signOut(this.auth).then(() => {
        this.userCredential.user = null;
        this.token=undefined;
        this.toast.showSuccess("Signed Out!");
        localStorage.removeItem('userCredential');
    });
  }
}
