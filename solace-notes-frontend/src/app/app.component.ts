import { Component, inject } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Auth, signInWithRedirect, AuthProvider, GoogleAuthProvider, ProviderId, signInWithPopup } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { DbService } from './db.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth: Auth = inject(Auth)

  constructor(public dbService: DbService) {}

  login() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider).then((res) => {
      this.dbService.uid = res.user.uid;
      this.dbService.getNotes()
    })
  }

  getNotes() {
    this.dbService.getNotes();
  }
}
