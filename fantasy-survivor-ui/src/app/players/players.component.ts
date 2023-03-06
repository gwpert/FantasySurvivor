import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/api';
import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import { FirebaseService } from './../firebase.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  public players: any[] = [];
  public hasJoined: boolean = false;
  constructor(
    public authService: AuthService,
    private firebaseService: FirebaseService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
   
    this.getPlayers();
  }

  private getPlayers() {
    getDocs(collection(this.firebaseService.db, 'players')).then((result) => {
      result.forEach((doc) => {
        if (doc.data()['Name']) {
          this.players.push(doc.data());
        }
      });
      if(this.players.find((x) => x.Name === this.authService.user.DisplayName)){
        this.hasJoined = true;
      }
    });
  }

  public joinGame(): void {
      addDoc(collection(this.firebaseService.db, 'players'), {
        NickName: this.authService.user.DisplayName,
        Name: this.authService.user.DisplayName,
        Points: 1,
        PhotoUrl: this.authService.user.AvatarURL,
        IsGM: false
      }).then((result) => {
        this.getPlayers();
      });
  }
}
