import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import {BooksComponent} from './books/books.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent,
  children: [
    {path: 'books', component: BooksComponent},
    {path: 'books/:id', component: BookDetailComponent},
  ]
  },
 // {path: '', redirectTo: '/books', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class HomePageRoutingModule {}
