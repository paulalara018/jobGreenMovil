import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoportePage } from './soporte';

@NgModule({
	declarations: [
		SoportePage
	],
	imports: [
		IonicPageModule.forChild(SoportePage)
	],
	exports: [
		SoportePage
	]
})

export class SoportePageModule { }
