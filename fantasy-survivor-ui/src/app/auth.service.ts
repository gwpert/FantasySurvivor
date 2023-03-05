import { Injectable } from '@angular/core';
import { getAuth, User, signInWithPopup, GoogleAuthProvider, UserCredential, OAuthCredential,signOut } from "firebase/auth";
import { FirebaseService } from './firebase.service';
import { Router, CanActivate } from '@angular/router';
import { FSUser } from './User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = <FSUser>{};
  constructor(private firebaseService: FirebaseService, private router: Router) {
    
      this.user = JSON.parse(localStorage.getItem('fst')!);
   }

  public login(loginResult: UserCredential){
    const userCredential =  GoogleAuthProvider.credentialFromResult(loginResult)!;
    this.user = <FSUser>{
      DisplayName: loginResult.user.displayName,
      AvatarURL: loginResult.user.photoURL
    }
    localStorage.setItem('fst', JSON.stringify(this.user));
  }

  public logout(){
    signOut(this.firebaseService.auth).then(() => {
      localStorage.clear();
      this.router.navigate(['login']);
    }).catch((error) => {
      // An error happened.
    });
  }
}
