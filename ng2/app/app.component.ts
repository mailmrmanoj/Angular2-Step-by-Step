import { Component } from 'angular2/core';
import { HeroesComponent } from './heroes/heroes.component';
import {testComponent} from './test/test.component';

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';




@Component({
	selector: 'my-book',
	template: `
			<h1>{{title}}</h1>
			<nav>
				<a [routerLink]="['Test']">Test</a>
				<a [routerLink]="['Heroes']">Heroes</a>
			</nav>
			<router-outlet></router-outlet>
			`,
	directives: [HeroesComponent,testComponent,ROUTER_DIRECTIVES]
})

// <toh-heroes></toh-heroes>
// <my-test></my-test>

@RouteConfig([
	{ path: '/test', name: 'Test', component: testComponent},
	{ path: '/heroes', name: 'Heroes', component: HeroesComponent }

])

export class AppComponent {
	title =  "Hello Tithi"
}