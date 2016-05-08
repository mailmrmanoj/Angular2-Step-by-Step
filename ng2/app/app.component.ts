import { Component } from 'angular2/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
	selector: 'my-book',
	template: `
			<h1>{{title}}</h1>
			<toh-heroes></toh-heroes>
			`,
	directives: [HeroesComponent]
})

export class AppComponent {
	title =  "Hello Tithi"
}