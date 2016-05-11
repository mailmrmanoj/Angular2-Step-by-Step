import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero.model';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

@Component({
	//moduleId: module.id,
	selector: 'toh-heroes',
	templateUrl: 'app/heroes/heroes.component.html',
	styleUrls: ['app/heroes/heroes.component.css'],
	directives: [HeroComponent],
	providers: [HeroService]
})


export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) {
		
	}

	ngOnInit(){
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
		//this.heroes = this.heroService.getHeroes()
	}


	onSelect(hero:Hero){
		this.selectedHero = hero;

		
	}
}