import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ScannerPage } from "../scanner/scanner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openScanner() {
    this.navCtrl.push(ScannerPage, {
      id: "123",
      name: "Carl"
    });
  }

}
