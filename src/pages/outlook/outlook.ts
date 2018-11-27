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
  @ViewChild('debtCanvas') debtCanvas;

  loan = new Loan();

  moreInfo = false;
  total: number;
  totalInterestPaid: number = 0;
  collegeYears: number;
  percentInterest: number;
  paymentCollege: number;
  paymentPostCollege: number;
  numPeriods: number = 0;
  totalNumPeriods: number; 
  pieChart: any; 
  debtChart: any;
  debtHistory: number[];
  activeChart = false;

  constructor(public navCtrl: NavController) {
  }

  NPER(loan) {
    var interestMonthly = loan.interestRate / 12;
    var moneyLeft = loan.principle;
    var monthlyPaymentCollege = this.paymentCollege;
    var monthlyPaymentPostCollege = this.paymentPostCollege;
    var collegePeriods = this.collegeYears*12;
    var debtHistory = [];
    while(moneyLeft > 0) {
        if(collegePeriods > 0){
            this.totalInterestPaid += moneyLeft*(interestMonthly/100);
            moneyLeft = (moneyLeft *(1+interestMonthly/100)) - monthlyPaymentCollege;
            collegePeriods -= 1;
            if (this.numPeriods % 12 === 0){
                debtHistory.push(-moneyLeft)
            }

        } else {
            this.totalInterestPaid += moneyLeft*(interestMonthly/100);
            moneyLeft = (moneyLeft *(1+interestMonthly/100)) - monthlyPaymentPostCollege;
            if (this.numPeriods % 12 === 0){
                debtHistory.push(-moneyLeft)
            }
        } 
        
        this.debtHistory = debtHistory;
        this.numPeriods ++;
    }

    if (moneyLeft <= 0){
        debtHistory.push(-moneyLeft);
    }
  }

  showChart() {
    this.NPER(this.loan);
    this.totalNumPeriods = Math.round(this.numPeriods / 12); 
    var i;
    var today = new Date(); 
    var todayYear = today.getFullYear();
    var yearsArray = []
    for (i = 0; i <= (this.numPeriods / 12); i++ ){
        yearsArray.push(todayYear + i);
    }
    this.total = Math.round(+this.loan.principle + +this.totalInterestPaid);
    this.activeChart = true;
    this.totalInterestPaid = Math.round(this.totalInterestPaid)
    var ip = this.totalInterestPaid;
    var p = this.loan.principle;

    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
 
      type: 'pie',
      data: { 
          labels: ["Interest", "Principle"],
          datasets: [{
              label: 'Debt Repayment Breakdown',
              data: [ip, p],
              backgroundColor: [
                  'red',
                  'grey',
              ],
              hoverBackgroundColor: [
                  "darkred",
                  "darkblue",
              ]
          }]
      }

    });

    this.debtChart = new Chart(this.debtCanvas.nativeElement, {
 
        type: 'line',
        data: {
            labels: yearsArray, 
            datasets: [{
                label: 'Current Plan',
                borderColor: 'red',
                data: this.debtHistory, 
            },
        ]
        }
  
    });
  }

  toggleMoreInfo() {
      this.moreInfo = !this.moreInfo
  }

  closeChart() {
      this.activeChart = false;
  }
}
