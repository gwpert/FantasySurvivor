// src/app/auth/auth-guard.service.tsimport { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {  
  
  constructor(public auth: AuthService, public router: Router) {}  canActivate(): boolean {
    if (!this.auth.user) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }}