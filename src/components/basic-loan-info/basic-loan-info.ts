import { Component } from '@angular/core';

/**
 * Generated class for the BasicLoanInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'basic-loan-info',
  templateUrl: 'basic-loan-info.html'
})
export class BasicLoanInfoComponent {

  text: string;

  constructor() {
    console.log('Hello BasicLoanInfoComponent Component');
    this.text = 'Hello World';
  }

}
