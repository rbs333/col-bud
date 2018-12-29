import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindingLoanInfoPage } from './finding-loan-info';

@NgModule({
  declarations: [
    FindingLoanInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(FindingLoanInfoPage),
  ],
})
export class FindingLoanInfoPageModule {}
