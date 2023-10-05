import { Component, inject, Input, OnInit } from '@angular/core';
import { Database, get, ref, set } from '@angular/fire/database';
import { Firestore, addDoc, collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DbService } from '../services/db.service';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {
  MIN_CHARACTERS = 20
  MAX_CHARACTERS = 300

  note: any;
  editNote: any;
  
  constructor(private dbService: DbService, public editService: EditService) {
    this.editService.currentNoteObj.subscribe(noteObj => {
      this.editNote = noteObj
      this.note.setValue(this.editNote.value.note);
    })
  }

  ngOnInit() {
    this.note = new FormControl('', {
      validators: [Validators.required(), Validators.minLength(this.MIN_CHARACTERS), Validators.maxLength(this.MAX_CHARACTERS)],
    })
    console.log(this.note)
  }

  submit() {
    if (this.note.valid) {
      if (this.editNote) {
        this.editNote.value.note = this.note.value
        this.dbService.updateNote(this.editNote)
        this.editNote = undefined
      }
      else {
        this.dbService.createNote(this.note.value)
      }
      this.note.reset()
    }
  }
}
