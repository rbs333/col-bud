import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { BasicLoanInfoComponent } from './basic-loan-info/basic-loan-info';
import { PaymentPlanComponent } from './payment-plan/payment-plan';
import { ResultsComponent } from './results/results';
import { SlidersComponent } from './sliders/sliders';
@NgModule({
	declarations: [ProgressBarComponent,
    BasicLoanInfoComponent,
    PaymentPlanComponent,
    ResultsComponent,
    SlidersComponent],
	imports: [],
	exports: [ProgressBarComponent,
    BasicLoanInfoComponent,
    PaymentPlanComponent,
    ResultsComponent,
    SlidersComponent]
})
export class ComponentsModule {}
