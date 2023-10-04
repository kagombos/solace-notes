import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent {
  MIN_CHARACTERS = 20
  MAX_CHARACTERS = 300

  firestore: Firestore = inject(Firestore);
  notesCollection: any
  notes$: Observable<any[]>

  note: any;
  
  constructor() {
    console.log("editor")
    console.log(this.firestore)
    this.notesCollection = collection(this.firestore, 'notes')
    this.notes$ = collectionData(this.notesCollection)
  }

  ngOnInit() {
    this.note = new FormControl('', {
      validators: [Validators.minLength(this.MIN_CHARACTERS), Validators.maxLength(this.MAX_CHARACTERS)],
    })
  }

  submit() {
    console.log(this.note)
    if (this.note.valid) {
      console.log("success!")
      this.notesCollection.add({
        "note": this.note.value
      })
    }
  }
}
