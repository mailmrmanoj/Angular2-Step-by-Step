import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HeroService {
	constructor(private http: Http) { }

	getHeroes(){
		return this.http.get('app/heroes.json')
			.map((res:Response) => res.json());
		// return[
		// 	{ 'id': 11, 'name': 'Afroza Yasmin' },
		// 	{ 'id': 12, 'name': 'Suraiya Yasmin' },
		// 	{ 'id': 13, 'name': 'Afroza Yasmin' },
		// 	{ 'id': 14, 'name': 'Afroza Yasmin' },
		// 	{ 'id': 15, 'name': 'Afroza Yasmin' }
		// ];
	}

}