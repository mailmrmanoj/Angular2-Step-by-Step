import { Component } from 'angular2/core';

@Component({
  selector: 'my-book',
  templateUrl: 'app/books.component.html'
})
export class BooksComponent {
  books = [
    { id: 1, name: 'Book 1' },
    { id: 2, name: 'Book 2' },
    { id: 3, name: 'Book 3' }
  ];
}

