import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutlookPage } from './outlook';
@NgModule({
  declarations: [
    OutlookPage,
  ],
  imports: [
    IonicPageModule.forChild(OutlookPage),
  ],
  entryComponents: [
    OutlookPage
  ]
})
export class OutlookPageModule {}
