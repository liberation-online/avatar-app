import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingsPage} from "../settings/settings";
import { AvatarsPage } from "../avatars/avatars";
import { PassportPage } from "../passport/passport";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AvatarsPage;
  tab3Root = PassportPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
