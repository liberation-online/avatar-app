import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ethereumAddress = null;
  createdAvatar = null;

  constructor(public navCtrl: NavController) {

  }

  createAvatar() {
    this.createdAvatar = this.ethereumAddress;
  }

}
