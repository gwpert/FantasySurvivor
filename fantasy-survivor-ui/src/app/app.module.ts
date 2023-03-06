import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SurvivorPickComponent } from './survivor-pick/survivor-pick.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PlayersComponent } from './players/players.component';
import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { ProfileComponent } from './profile/profile.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputSwitchModule} from 'primeng/inputswitch';
import { SurvivorsComponent } from './survivors/survivors.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SurvivorPickComponent,
    TeamsComponent,
    HomeComponent,
    PlayersComponent,
    ProfileComponent,
    SurvivorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    ChipModule,
    SplitButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    InputSwitchModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
