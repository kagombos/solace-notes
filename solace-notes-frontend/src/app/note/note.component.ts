import { Component, Input } from '@angular/core';
import { DbService } from '../services/db.service';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() noteObj?: { key: string, value: any }

  showActions: boolean = false;

  constructor(public dbService: DbService, public editService: EditService) {}

}
