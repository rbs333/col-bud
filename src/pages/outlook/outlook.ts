import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js'

@Component({
  selector: 'page-outlook',
  templateUrl: 'outlook.html'
})
export class OutlookPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  principle: number;
  interest_paid: number;
  total: number;
  percentInterest: number;
  payment: number;
  numPeriods: number = 0;

  doughnutChart: any;
  activeChart = false;

  constructor(public navCtrl: NavController) {

  }

  showChart() {
    this.activeChart = true;
    var ip = this.interest_paid;
    var p = this.principle;
    var percent = (1.0*this.interest_paid)/(this.principle) * 100;
    this.percentInterest = Math.round(percent*100)/100;
    var usualPayment = this.payment;
    var moneyLeft = this.principle;
    while(moneyLeft > 0) {
        moneyLeft = (moneyLeft *(1+this.percentInterest/100)) - usualPayment;
        if(moneyLeft >= this.principle) {
            this.numPeriods = -1;
            break;
        }
        else {
            this.numPeriods ++;
        }
    }
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
      type: 'doughnut',
      data: {
          labels: ["Interest", "Principle"],
          datasets: [{
              label: 'Debt Repayment Breakdown',
              data: [ip, p],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
              ]
          }]
      }

  });
  }

}
