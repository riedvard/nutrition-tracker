import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, User } from 'firebase/auth';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import firebase from 'firebase/compat/app';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedInLocal = false;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService
  ) {}

  public isLoggedIn(): boolean {
    return this.isLoggedInLocal;
  }

  // Sign up with email/password
  async SignUp(email, password) {
    try {
      const result = await this.afAuth
        .createUserWithEmailAndPassword(email, password);
      window.alert('You have been successfully registered!');
      console.log(result.user);
      this.isLoggedInLocal = true;
      this.userService.currentUser$.next(result.user);
      this.router.navigate(['/home']);
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Sign in with email/password
  async SignIn(email, password) {
    try {
      const result = await this.afAuth
        .signInWithEmailAndPassword(email, password);
      window.alert('You have been successfully logged in!');
      console.log(result);
      this.isLoggedInLocal = true;
      this.userService.setUser(result.user);
      this.userService.currentUser$.next(result.user);
      this.router.navigate(['/home']);
    } catch (error) {
      window.alert(error.message);
    }
  }

   // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
        this.isLoggedInLocal = true;        
        this.userService.setUser(result.user);
        this.userService.currentUser$.next(result.user);
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public Logout(): void {
    // Kijelentkezési logika

    this.router.navigate(['/login']);
    this.isLoggedInLocal = false;
  }
/*
  async getCurrentUser(): Promise<firebase.User | null> {
    return await this.afAuth.currentUser;
  }
*/

getCurrentUser(): Observable<User> {
  return from(this.afAuth.currentUser);
}
}
