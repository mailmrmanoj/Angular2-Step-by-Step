// Root app component
import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title: 'Two-way Binding';

  book = {
  	name: 'Book'
  };
}

