import { Component } from 'angular2/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css']
})

export class AppComponent {
	title: string;
	messages: string[] = [];
	imagePath = 'app/images.png'

	constructor(){
		this.title = "Angular 2 Binding Events"
	}

	log(msg: string, data: string){
		this.messages.splice(0,0,msg);
		console.log(msg);
		if(data){
			console.log(data);
		}
	}
}