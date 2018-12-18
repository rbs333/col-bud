import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Level_1Page } from '../level-1/level-1';

@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html'
})
export class PlanPage {

  constructor(public navCtrl: NavController) {

  }

  levelOne() {
    this.navCtrl.push(Level_1Page)
  }
}
