import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { InicioPage } from './inicio';

@NgModule({
  declarations: [
    InicioPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioPage),
    AgmCoreModule.forRoot({
			apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
		})
  ],
})
export class InicioPageModule {}
