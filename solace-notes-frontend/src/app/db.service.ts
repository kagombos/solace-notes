import { Injectable, inject } from '@angular/core';
import { Database, DatabaseReference, get, list, listVal, object, onValue, push, ref, set } from '@angular/fire/database';

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
      note
    ).then(() => {
      this.getNotes()
    })
  }

  getNotes() {
    get(ref(this.database, this.uid)).then(snap => {
      this.notes = this.convertMapToArray(snap.val())
    });
  }

  addListeners(uid: string) {
    console.log("added listener")
    this.uid = uid;
    // onValue(ref(this.database, this.uid + '/'), (snapshot) => {
    //   console.log(this.uid)
    //   const notesMap = snapshot.val()
    //   this.notes = this.convertMapToArray(notesMap)
    //   console.log(this.notes)
    // })
  }

  convertMapToArray(map: any) {
    return Object.keys(map).map(key => { return { "key": key, "value": map[key]} })
  }
}