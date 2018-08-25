import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'page-about',
  segment: 'about'
})

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})

export class AboutPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
}
