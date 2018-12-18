import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PlanPage } from '../pages/plan/plan';
import { LearnPage } from '../pages/learn/learn';
import { OutlookPage } from '../pages/outlook/outlook';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Level_1Page } from '../pages/level-1/level-1';
import { HomePage } from '../pages/home/home';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    MyApp,
    PlanPage,
    LearnPage,
    OutlookPage,
    TabsPage,
    Level_1Page,
    HomePage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlanPage,
    LearnPage,
    OutlookPage,
    TabsPage,
    Level_1Page,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
