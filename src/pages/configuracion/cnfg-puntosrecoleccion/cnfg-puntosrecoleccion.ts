import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoReciclajeModel } from '../../model/tipo-reciclaje-model';
import { PruebaServiceProvider } from '../../../providers/prueba-service/prueba-service';

/**
 * Generated class for the CnfgPuntosrecoleccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
	name: 'page-cnfg-puntosrecoleccion'
})

@Component({
  selector: 'page-cnfg-puntosrecoleccion',
  templateUrl: 'cnfg-puntosrecoleccion.html',
})
export class CnfgPuntosrecoleccionPage {
  listData: Array<TipoReciclajeModel>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaService: PruebaServiceProvider) {
  }

  ngOnInit(): void {
    this.pruebaService.getAll().subscribe(data => {
      this.listData = data;
    });
  }

  itemClicked(item): void {
    this.navCtrl.push('PunRecEditarPage', item);
   // console.log(item);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CnfgTiposreciclajePage');
  }
}
