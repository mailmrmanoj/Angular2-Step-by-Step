import { Component } from 'angular2/core';

import { bookService } from './book.service';


@Component({
	selector: 'my-book',
	templateUrl: 'app/book.component.html',
	providers: [bookService]
})

export class bookComponent {

	constructor(private _bookService: bookService){
	
		
	}

	books = this._bookService.getBooks();
	
}