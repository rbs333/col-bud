import { Component } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'sliders',
  templateUrl: 'sliders.html'
})
export class SlidersComponent {

  @Output() changedParam = new EventEmitter<string>();
  param = "something"

  constructor() {
  }

  emit() {
    this.changedParam.emit(this.param);
  }

}
