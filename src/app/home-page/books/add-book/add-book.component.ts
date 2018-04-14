import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Book} from '../../../shared/model/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  formAdd: FormGroup;
  book: Book;
  datePattern = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';

  constructor(
    private dialogRefAdd: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
    this.formAdd = new FormGroup({
      'author': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'title': new FormControl(null, [Validators.required, Validators.minLength(4)
      ]),
      'date': new FormControl(null, [Validators.required, Validators.pattern(this.datePattern)])
    });
  }

  save() {
    this.dialogRefAdd.close(this.formAdd.value);
  }

  close() {
    this.dialogRefAdd.close(console.log('closed'));
  }


}
