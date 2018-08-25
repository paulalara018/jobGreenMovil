import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegalosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-solicitud-recoleccion',
  templateUrl: 'solicitud-recoleccion.html',
})

export class SolicitudRecoleccionPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudRecoleccionPage');
  }
  itemClicked(item): void {
    this.navCtrl.push('SolRecoleccionCrearPage', item);
   // console.log(item);
  }
}
