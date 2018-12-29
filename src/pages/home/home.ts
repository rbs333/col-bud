import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OutlookPage } from '../outlook/outlook';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  parentParam: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  nextPage() {
    this.navCtrl.push(OutlookPage)
  }

  onParamEmitted(param: string) {
    this.parentParam = param;
    console.log("Event Emitted");
    console.log(this.parentParam);
  }

}
