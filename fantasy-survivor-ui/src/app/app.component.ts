import { FirebaseService } from './firebase.service';
import { Component, OnInit } from '@angular/core';
import { signInWithPopup, UserCredential } from "firebase/auth";
import { AuthService } from './auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(){}

  ngOnInit() {
   
  }
}
