import { NgModule } from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import {HomePageRoutingModule} from './home-page-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {SymbolsPipe} from '../shared/pipes/symbols.pipe';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  declarations: [
    HomePageComponent,
    HeaderComponent,
    BooksComponent,
    AddBookComponent,
    BookDetailComponent,
    SymbolsPipe
  ],
  entryComponents: [
    AddBookComponent
  ]
})
export class HomePageModule { }
