import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { BasicLoanInfoComponent } from './basic-loan-info/basic-loan-info';
import { PaymentPlanComponent } from './payment-plan/payment-plan';
import { ResultsComponent } from './results/results';
@NgModule({
	declarations: [ProgressBarComponent,
    BasicLoanInfoComponent,
    PaymentPlanComponent,
    ResultsComponent],
	imports: [],
	exports: [ProgressBarComponent,
    BasicLoanInfoComponent,
    PaymentPlanComponent,
    ResultsComponent]
})
export class ComponentsModule {}
