import { Component } from 'angular2/core';

@Component({
	selector: 'my-book',
	template: `
			<h1>Book Store</h1>
			<p>Displaying Data - Define Three types of data binding.</p>
			<span>Interpolation --- </span><h3> {{book.name}}</h3> <!-- Data Binding (Called Interpolation)  -->
			<span>Property Binding--- </span><h3 [innerText]= "book.name"></h3> <!-- Data Binding (Called property binding) -->
			<span>Event Binding --- </span><div [style.color]="color">{{book.name}}</div> <!-- Data Binding (Called event binding) -->
		`
})

export class AppComponent {
	book = { id: 1, name: 'Book 1' };
	color = 'red';
}