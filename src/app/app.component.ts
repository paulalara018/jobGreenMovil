import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

export interface MenuItem {
	title: string;
	component: any;
	icon: string;
}
@Component({
	templateUrl: 'app.html'
})
export class jobGreen {
	@ViewChild(Nav) nav: Nav;
	rootPage: any = 'page-inicio';
	
	appMenuItems: Array<MenuItem>;
	accountMenuItems: Array<MenuItem>;
	helpMenuItems: Array<MenuItem>;
	configurationMenuItems: Array<MenuItem>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();
		this.accountMenuItems = [
			{title: 'Autenticacion', component: 'page-login', icon: 'log-in'},
			{title: 'Cuenta', component: 'page-perfil', icon: 'contact'},
		];

		this.appMenuItems = [
			{title: 'Inicio', component: 'page-inicio', icon: 'home'},
		];

		this.configurationMenuItems = [
			{title: 'Puntos de recoleccion', component: 'page-cnfg-puntosrecoleccion', icon: 'settings'},
		];

		this.helpMenuItems = [
			{title: 'Acerca de', component: 'page-about', icon: 'information-circle'},
			{title: 'Soporte', component: 'page-soporte', icon: 'information-circle'}
		];
	} 

	initializeApp() {
			this.platform.ready().then(() => {
			//Okay, so the platform is ready and our plugins are available.
			//Here you can do any higher level native things you might need.
			this.statusBar.styleLightContent();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}
