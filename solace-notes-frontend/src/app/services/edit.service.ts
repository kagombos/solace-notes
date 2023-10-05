import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EditService {

  currentNoteObj: Subject<any> = new Subject();

  constructor() { }
}
