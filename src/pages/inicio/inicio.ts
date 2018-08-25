import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SolicitudRecoleccionPage } from './solicitud-recoleccion/solicitud-recoleccion';
import { DenunciaPage } from './denuncia/denuncia';
import { PuntosRecoleccionPage } from './puntos-recoleccion/puntos-recoleccion';
import { RegalosPage } from './regalos/regalos';

/**
 * Generated class for the ContentInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
	name: 'page-inicio'
})

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})

export class InicioPage {
  tab1 = 'SolicitudRecoleccionPage';
  tab2 = 'DenunciaPage';
  tab3 = 'PuntosRecoleccionPage';
  tab4 = 'RegalosPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentInicioPage');
  }
}
