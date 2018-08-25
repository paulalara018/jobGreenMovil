import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitudRecoleccionPage } from '../solicitud-recoleccion/solicitud-recoleccion';

@NgModule({
  declarations: [
    SolicitudRecoleccionPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitudRecoleccionPage),
  ],
})
export class SolicitudRecoleccionPageModule {}