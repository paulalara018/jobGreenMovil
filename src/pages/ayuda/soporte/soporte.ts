import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
	name: 'page-soporte'
})

@Component({
    selector: 'page-soporte',
    templateUrl: 'soporte.html'
})

export class SoportePage {
  constructor(public navCtrl: NavController) {
  }
  openChat() {
  	// console.log(proptype);
  	this.navCtrl.push('page-chat-detail');
  }

}
