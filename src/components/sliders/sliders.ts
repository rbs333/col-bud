import { Component } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'sliders',
  templateUrl: 'sliders.html'
})
export class SlidersComponent {

  @Output() paymentCollege = new EventEmitter<number>();
  @Output() paymentPostCollege = new EventEmitter<number>();
  @Output() yearsLeftInCollege = new EventEmitter<number>();
  collegePayment: number = 0;
  postColPayment: number = 0;
  colYears: number = 0;

  constructor() {
  }

  emit() {
    this.paymentCollege.emit(this.collegePayment);
    this.paymentPostCollege.emit(this.postColPayment);
    this.yearsLeftInCollege.emit(this.colYears);
    console.log("emitted");
  }

}
