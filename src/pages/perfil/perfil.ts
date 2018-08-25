import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';

@IonicPage({
	name: 'page-perfil',
	segment: 'perfil'
})

@Component({
    selector: 'page-perfil',
    templateUrl: 'perfil.html'
})

export class PerfilPage {
  profiledata: Boolean = true;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }
}
