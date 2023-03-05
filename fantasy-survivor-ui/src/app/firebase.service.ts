import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from "firebase/firestore";
import { Analytics, getAnalytics } from 'firebase/analytics';
import { collection, addDoc } from "firebase/firestore"; 
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth,Auth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: 'AIzaSyBdan2KvHQxcVJHWDUTcc5OmPKC1j28Ckc',
  authDomain: 'fantasy-survivor-65f1c.firebaseapp.com',
  databaseURL: 'https://fantasy-survivor-65f1c-default-rtdb.firebaseio.com',
  projectId: 'fantasy-survivor-65f1c',
  storageBucket: 'fantasy-survivor-65f1c.appspot.com',
  messagingSenderId: '155575907211',
  appId: '1:155575907211:web:b28fab7a04bc9be6b9b58e',
  measurementId: 'G-QEW1MGJ8HR',
};



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public app: FirebaseApp;
  public db: Firestore;
  public provider: GoogleAuthProvider;
  public auth: Auth;
  public analytics: Analytics;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth(this.app);
    this.analytics = getAnalytics(this.app);
   }
}
