import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SolRecoleccionCrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sol-recoleccion-crear',
  templateUrl: 'sol-recoleccion-crear.html',
})
export class SolRecoleccionCrearPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SolRecoleccionCrearPage');
  }
}
