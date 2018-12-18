import { Component } from '@angular/core';

/**
 * Generated class for the PaymentPlanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'payment-plan',
  templateUrl: 'payment-plan.html'
})
export class PaymentPlanComponent {

  text: string;

  constructor() {
    console.log('Hello PaymentPlanComponent Component');
    this.text = 'Hello World';
  }

}
