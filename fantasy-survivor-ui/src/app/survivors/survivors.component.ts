import { FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/api';
import { Player } from '../Player';
import { collection, query, where, getDocs, updateDoc,doc } from 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survivors',
  templateUrl: './survivors.component.html',
  styleUrls: ['./survivors.component.scss']
})
export class SurvivorsComponent {
  public survivors: any[] = [];

  constructor(
    public authService: AuthService,
    private firebaseService: FirebaseService
  ) {
    getDocs(collection(this.firebaseService.db, 'survivors')).then((result) => {
      result.forEach((doc) => {
        if (doc.data()['Name']) {
          this.survivors.push(doc.data());
        }
      });
    });
  }

  private getSurvivors() {
   
  }
  
}
