import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ScannerPage } from "../scanner/scanner";
import { SettingsPage} from "../settings/settings";
import { AvatarsPage } from "../avatars/avatars";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AvatarsPage;
  tab3Root = ScannerPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
