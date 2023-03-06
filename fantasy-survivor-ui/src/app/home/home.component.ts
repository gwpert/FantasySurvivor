import { FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/api';
import { Player } from '../Player';
import { collection, query, where, getDocs, updateDoc,doc } from 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public items: MenuItem[] = [];
  public players: any[] = [];
  public seletedMenuItem: string = '';
  public displayProfile: boolean = true;
  constructor(
    public authService: AuthService,
    private firebaseService: FirebaseService,
    public router: Router
  ) {}
  ngOnInit() {
   
    const q = query(
      collection(this.firebaseService.db, 'players'),
      where('Name', '==', this.authService.user.DisplayName)
    );
    getDocs(q).then((result: any) => {
      result.forEach((doc: any) => {
        this.displayProfile = true;
      });
    });

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: () => {
          this.seletedMenuItem = '';
          this.router.navigate(['']);
        },
      },
      {
        label: 'Survivors',
        icon: 'pi pi-fw pi-users',
        command: () => {
          this.seletedMenuItem = 'survivors';
        },
      },
      {
        label: 'Players',
        icon: 'pi pi-fw pi-users',
        command: () => {
          this.seletedMenuItem = 'players';
        },
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        visible: this.displayProfile,
        command: () => {
          this.seletedMenuItem = 'profile';
        },
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.logout(),
        
      },
    ];
  }


  public logout(): void {
    this.authService.logout();
  }
}
