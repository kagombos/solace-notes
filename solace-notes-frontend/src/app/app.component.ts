import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  MIN_CHARACTERS = 20
  MAX_CHARACTERS = 300

  note: any;
  fb = new FormBuilder()
  
  ngOnInit() {
    this.note = new FormControl('', {
      validators: [Validators.minLength(this.MIN_CHARACTERS), Validators.maxLength(this.MAX_CHARACTERS)],
    })
  }

  submit() {
    console.log(this.note)
    if (this.note.valid) {
      console.log("success!")
    }
  }
}
