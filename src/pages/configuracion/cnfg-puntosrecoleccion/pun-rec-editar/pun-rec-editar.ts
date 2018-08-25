import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PunRecEditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pun-rec-editar',
  templateUrl: 'pun-rec-editar.html',
})

export class PunRecEditarPage {
  puntoRecoleccion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.puntoRecoleccion = this.navParams.data;
    console.log(this.puntoRecoleccion);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PunRecEditarPage');
  }
}
