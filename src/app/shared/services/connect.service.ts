import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get('./assets/db.json').map(data => {
      let booksList = data['books'];
      return booksList.map(function (book: any) {
        return {author: book.author, title: book.title, date: book.date, id: book.id};
      });
    });
  }
}
