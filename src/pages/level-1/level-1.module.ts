import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Level_1Page } from './level-1';

@NgModule({
  declarations: [
    Level_1Page,
  ],
  imports: [
    IonicPageModule.forChild(Level_1Page),
  ],
  entryComponents: [
    Level_1Page
  ]
})
export class Level_1PageModule {}
