import { Injectable, inject } from '@angular/core';
import { Database, DatabaseReference, get, list, listVal, object, onValue, orderByChild, push, query, ref, set, update } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  uid: string = ''
  notes: any;

  private database: Database = inject(Database)

  constructor() { }

  createNote(note: string) {
    set(ref(this.database, this.uid + '/' + self.crypto.randomUUID()),
      {
        'createdDate': new Date().toISOString(),
        'note': note
      }
    ).then(() => {
      this.getNotes()
    })
  }

  getNotes() {
    get(ref(this.database, this.uid)).then(snap => {
      this.notes = this.convertMapToArray(snap.val())
    });
  }

  deleteNote(noteId: string) {
    set(ref(this.database, this.uid + '/' + noteId), {}).then(() => {
      this.getNotes()
    })
  }

  updateNote(noteObj: any) {
    set(ref(this.database, this.uid + '/' + noteObj.key), noteObj.value).then(() => {
      this.getNotes()
    })
  }

  convertMapToArray(map: any) {
    let array = Object.keys(map).map(key => { return { "key": key, "value": map[key]} })
    return array.sort((a, b) => new Date(b.value.createdDate).valueOf() - new Date(a.value.createdDate).valueOf())
  }
}