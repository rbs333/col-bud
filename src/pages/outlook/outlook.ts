import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import 'node-finance';
import { Loan } from './loan';

@Component({
  selector: 'page-outlook',
  templateUrl: 'outlook.html'
})
export class OutlookPage {

  @ViewChild('pieCanvas') pieCanvas;

  loan = new Loan();
  total: number;
  totalInterestPaid: number = 0;
  collegeYears: number;
  percentInterest: number;
  paymentCollege: number;
  paymentPostCollege: number;
  numPeriods: number = 0;
  totalNumPeriods: number;

  doughnutChart: any;
  activeChart = false;

  constructor(public navCtrl: NavController) {
  }

  NPER(loan) {
    var interestMonthly = loan.interestRate / 12;
    var moneyLeft = loan.principle;
    var monthlyPaymentCollege = this.paymentCollege;
    var monthlyPaymentPostCollege = this.paymentPostCollege;
    var collegePeriods = this.collegeYears*12;
    while(moneyLeft > 0) {
        if(collegePeriods > 0){
            this.totalInterestPaid += moneyLeft*(interestMonthly/100);
            moneyLeft = (moneyLeft *(1+interestMonthly/100)) - monthlyPaymentCollege;
            collegePeriods -= 1;
            console.log("In College");
            console.log(moneyLeft);
            console.log(this.totalInterestPaid);
        }
        if(collegePeriods == 0){
            this.totalInterestPaid += moneyLeft*(interestMonthly/100);
            moneyLeft = (moneyLeft *(1+interestMonthly/100)) - monthlyPaymentPostCollege;
            console.log("Out of College");
            console.log(moneyLeft);
            console.log(this.totalInterestPaid);
        }
        if(moneyLeft >= loan.principle) {
            this.numPeriods = -1;
            break;
        }
        else {
            this.numPeriods ++;
        }
    }
  }

  showChart() {
    this.NPER(this.loan);
    this.totalNumPeriods = this.numPeriods / 12;
    this.total = +this.loan.principle + +this.totalInterestPaid;
    this.activeChart = true;
    var ip = this.totalInterestPaid;
    var p = this.loan.principle;
    
    this.doughnutChart = new Chart(this.pieCanvas.nativeElement, {
 
      type: 'pie',
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
