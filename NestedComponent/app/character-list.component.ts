import { Component } from 'angular2/core';
import { Character } from './character';
import { CharacterComponent } from './character.component';


@Component({
	selector: 'my-character-list',
	templateUrl: 'app/character-list.component.html',
	directives: [CharacterComponent]
})

export class CharacterListComponent{
	selectedCharacter: Character;

	characters = [
		new Character(1, 'Hello'),
		new Character(2, 'Hi')
	];

	select(character: Character){
		this.selectedCharacter = character;
	}
}

