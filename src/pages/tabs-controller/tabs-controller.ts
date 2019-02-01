import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { LinksPage } from '../links/links';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DashboardPage;
  tab2Root: any = LinksPage;
  tab3Root: any = ProfilePage;
  constructor(public navCtrl: NavController) {
  }
  
}
