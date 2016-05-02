import { Componet } from 'angular2/core'


@Compoent({
	selector: 'my-app',
	templateUrl: 'app/app.component.html'
})

export class AppComponent{
	title: 'Angular 2 property binding';
	book: 'Book 1';
	imagePath: 'app/images.png';
	link: 'http://angular.io';
}