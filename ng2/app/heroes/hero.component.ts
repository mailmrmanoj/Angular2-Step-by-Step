import { Component, Input, OnInit} from 'angular2/core';

import { Hero } from './hero.model';

@Component({
	selector: 'toh-hero',
	templateUrl: 'app/heroes/hero.component.html'
})

export class HeroComponent implements OnInit{
	@Input() hero: Hero;

	ngOnInit() {}

}