import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DenunciaCrearPage } from './denuncia-crear';
import { CapturaImagenComponent } from '../../../utils/captura-imagen/captura-imagen';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    DenunciaCrearPage,
    CapturaImagenComponent
  ],
  imports: [
    IonicPageModule.forChild(DenunciaCrearPage),
  ],
  providers: [
    Camera
  ]

})
export class DenunciaCrearPageModule {}