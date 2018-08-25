import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraOptions, Camera } from '@ionic-native/camera';

/**
 * Generated class for the DenunciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html',
})  
export class DenunciaPage {
  base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DenunciaPage');
  }
  itemClicked(item): void {
    this.navCtrl.push('DenunciaCrearPage', item);
  }
}
