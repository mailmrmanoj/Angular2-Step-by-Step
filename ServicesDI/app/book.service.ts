import { Injectable } from 'angular2/core';

@Injectable()

export class bookService {
	getBooks = () => [
		{ id: 1, name: 'Book 1'},
		{ id: 2, name: 'Book 2' }
	]
}
