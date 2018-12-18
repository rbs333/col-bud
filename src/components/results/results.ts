import { Component } from '@angular/core';

/**
 * Generated class for the ResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'results',
  templateUrl: 'results.html'
})
export class ResultsComponent {

  text: string;

  constructor() {
    console.log('Hello ResultsComponent Component');
    this.text = 'Hello World';
  }

}
