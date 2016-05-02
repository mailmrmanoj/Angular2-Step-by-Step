  import { bootstrap } from 'angular2/platform/browser';
  import { BooksComponent } from './app.component';

  bootstrap(BooksComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

