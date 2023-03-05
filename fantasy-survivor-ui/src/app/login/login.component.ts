
import { Component, OnInit } from '@angular/core';
import { signInWithPopup, UserCredential } from "firebase/auth";
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private route: ActivatedRoute, private firebaseService: FirebaseService, private authService: AuthService){}
  ngOnInit() {
  
  }

  public login(){
    signInWithPopup(this.firebaseService.auth, this.firebaseService.provider)
    .then((result: UserCredential) => {
      this.authService.login(result);
      this.router.navigate(['']);
    }).catch((error) => {
     
    });
  }
}
