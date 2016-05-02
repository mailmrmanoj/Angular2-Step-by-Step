//our root app component
import {Component} from 'angular2/core'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'Angular 2 Property Binding';
  book = 'Book';
  imagePath = 'app/images.png';
  link = "http://angular.io"
}