import {Component, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Book} from '../../shared/model/book';
import {ConnectService} from '../../shared/services/connect.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {TitleCasePipe} from '@angular/common';
import {AddBookComponent} from './add-book/add-book.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  book: Book;
  books: Book[] = [];
  newBookList: Book[] = [];
  showAddBook = false;
  formEdit: FormGroup;


  constructor(private connect: ConnectService,
              private modalService: NgbModal,
              public dialog: MatDialog,
              public dialogAdd: MatDialog,
              private titleCase: TitleCasePipe) { }

  ngOnInit() {
    this.getBooks();
  }

  loadAddBookBlock() {
    this.showAddBook = true;
  }

  getBooks() {
    this.connect.getBooks().subscribe(data => {
      console.log(data);
      this.books = data;
      this.newBookList = this.books;
    });
  }
  deleteBookById(id) {
   this.newBookList.splice(id, 1);
    console.log(this.newBookList);
  }
  promptWarning(id: number) {
    if (confirm(' Are you sure to delete ' + this.newBookList[id].title)) {
      console.log(id);
      this.deleteBookById(id);
    }
  }

  openDialog(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      title: 'Edit Book',
      book: this.books[id]
    };
    const dialogRef = this.dialog.open(BookDetailComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => {
          if (data !== undefined) {
            this.newBookList[id].author = this.titleCase.transform(data.author);
            this.newBookList[id].title = this.titleCase.transform(data.title);
            this.newBookList[id].date = this.titleCase.transform(data.date);
          }
         }
    );
  }
  openDialogAdd() {
    const dialogAddConfig = new MatDialogConfig();
    dialogAddConfig.disableClose = true;
    dialogAddConfig.autoFocus = false;

    dialogAddConfig.data = {
      title: 'Add Book',
      width: '400px',
    };
    const dialogRefAdd = this.dialogAdd.open(AddBookComponent, dialogAddConfig);
    dialogRefAdd.afterClosed().subscribe(
      data => {
        if (data !== undefined) {
          console.log(data);
          this.newBookList.push(data);
        }
      }
    );
  }
}
