import { FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/api';
import { collection, addDoc,query,
  getDocs } from "firebase/firestore";
import { Player } from '../Player';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public items: MenuItem[] = [];
  public players: any[] = [];
  constructor(public authService: AuthService,private firebaseService: FirebaseService) {
  }
  ngOnInit() {
    this.getPlayers();
  }

  private getPlayers(){
    getDocs(collection(this.firebaseService.db, "players")).then(result => {
      result.forEach((doc) =>{
        if(doc.data()['Name']){
          this.players.push(doc.data());
        }
      })
   });
  }

  public joinGame(): void{
    addDoc(collection(this.firebaseService.db, "players"), {
      NickName: this.authService.user.DisplayName,
      Name: this.authService.user.DisplayName,
      Points: 1,
      PhotoUrl: this.authService.user.AvatarURL
    }).then(result =>{
      this.getPlayers();
    });
    
  }

  public logout(): void{
    this.authService.logout();
  }
}
