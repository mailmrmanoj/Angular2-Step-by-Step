import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero.model';

@Component({
	//moduleId: module.id,
	selector: 'toh-heroes',
	templateUrl: 'app/heroes/heroes.component.html'
})


export class HeroesComponent implements OnInit {
	heroes: Hero[];

	constructor(argument) {
		// code...
	}

	ngOnInit(){
		this.heroes = [
			{ 'id': 11, 'name': 'Afroza Yasmin' }
		];
		console.log(this.heroes)
	}
}