import {Component, Inject, Input, OnInit} from '@angular/core';
import {Book} from '../../../shared/model/book';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  formEdit: FormGroup;
  book: Book;
  datePattern = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';

  constructor(
    private dialogRef: MatDialogRef<BookDetailComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }

  ngOnInit() {
    this.formEdit = new FormGroup({
      'author': new FormControl(this.book.author, [Validators.required, Validators.minLength(4)]),
      'title': new FormControl(this.book.title, [Validators.required, Validators.minLength(4)
      ]),
      'date': new FormControl(this.book.date, [Validators.required, Validators.pattern(this.datePattern)])
    });
  }

  get title() { return this.formEdit.get('title'); }
  get author() { return this.formEdit.get('author'); }
  get date() { return this.formEdit.get('date'); }

  save() {
    this.dialogRef.close(this.formEdit.value);
  }

  close() {
    this.dialogRef.close(console.log('closed'));
  }

}
