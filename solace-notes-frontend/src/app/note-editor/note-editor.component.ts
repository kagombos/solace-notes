import { Component, inject, Input, OnInit } from '@angular/core';
import { Database, get, ref, set } from '@angular/fire/database';
import { Firestore, addDoc, collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DbService } from '../db.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {
  MIN_CHARACTERS = 20
  MAX_CHARACTERS = 300
  notesCollection: any

  note: any;
  store: any;
  notes: any;
  
  constructor(private dbService: DbService) {
  }

  ngOnInit() {
    this.note = new FormControl('', {
      validators: [Validators.minLength(this.MIN_CHARACTERS), Validators.maxLength(this.MAX_CHARACTERS)],
    })
    console.log(this.note)
  }

  submit() {
    console.log(this.note)
    if (this.note.valid) {
      this.dbService.createNote(this.note.value)
    }
  }
}
