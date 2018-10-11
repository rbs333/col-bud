import { Component } from '@angular/core';

import { PlanPage } from '../plan/plan';
import { LearnPage } from '../learn/learn';
import { OutlookPage } from '../outlook/outlook';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OutlookPage;
  tab2Root = PlanPage;
  tab3Root = LearnPage;

  constructor() {

  }
}
