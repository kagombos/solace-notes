import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { NoteComponent } from './note/note.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore,Firestore } from '@angular/fire/firestore'

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
