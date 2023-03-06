import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/api';
import { collection, query, where, getDocs, updateDoc,doc } from 'firebase/firestore';
import { Player } from '../Player';
import { FirebaseService } from './../firebase.service';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profileForm = new FormGroup({
    displayName: new FormControl(''),
    colour: new FormControl(''),
  });
  public isGM: boolean = false;
  public profile: any;
  constructor(
    public authService: AuthService,
    private firebaseService: FirebaseService,
    private messageService: MessageService
  ) {}

  public updateAdmin(event: any) {
    const q = query(
      collection(this.firebaseService.db, 'players'),
      where('IsGM', '==', true)
    );
    getDocs(q).then((result: any) => {
      result.forEach((doc: any) => {
        let gmExists: boolean = false;
        if(doc.data()['IsGM']){
          gmExists = true;
          this.messageService.add({severity:'info', summary:'GM Already Exists'});
        }
        if(!gmExists){
          const userRef = doc(this.firebaseService.db, "players",   this.profile['id']);
          updateDoc(userRef, {
            IsGM: this.isGM
          }).then((result: any)=>{
            this.messageService.add({severity:'info', summary:'You are now the GM'});
          });
        }
      });
    });
 
  }

  ngOnInit() {
    const q = query(
      collection(this.firebaseService.db, 'players'),
      where('Name', '==', this.authService.user.DisplayName)
    );
    getDocs(q).then((result: any) => {
      result.forEach((doc: any) => {
        this.profile = doc.data();
        this.profile['id'] = doc.id;
        this.isGM = doc.data()['IsGM'];
        this.profileForm.controls['displayName'].setValue(this.profile.Name);
      });
    });
  }
}
