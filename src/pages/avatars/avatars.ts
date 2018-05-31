import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import nodeEth from 'node-eth-address';

@IonicPage()
@Component({
  selector: 'page-avatars',
  templateUrl: 'avatars.html',
})
export class AvatarsPage {

  createdAvatar = null;
  avatarName = null;
  avatarPassword = null;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createAvatar() {
    console.log(this.avatarPassword);
    let address = nodeEth.getDefaultAddress(this.avatarPassword);
    console.log(address.keyStore);
    this.createdAvatar = address.address;
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvatarsPage');
  }

}
