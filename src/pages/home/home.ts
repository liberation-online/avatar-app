import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import nodeEth from 'node-eth-address';

import { ScannerPage } from "../scanner/scanner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  createdAvatar = null;
  avatarName = null;

  constructor(public navCtrl: NavController) {

  }

  createAvatar() {
    //@todo - use user defined password
    let address = nodeEth.getDefaultAddress('password');
    console.log(address.keyStore);
    this.createdAvatar = address.address;
  }

  openScanner() {
    this.navCtrl.push(ScannerPage, {
      id: "123",
      name: "Carl"
    });
  }

}
