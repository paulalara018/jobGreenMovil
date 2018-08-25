import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { jobGreen } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { PruebaServiceProvider } from '../providers/prueba-service/prueba-service';
import { Camera } from '@ionic-native/camera';
import { DenunciaCrearPage } from '../pages/inicio/denuncia/denuncia-crear/denuncia-crear';

@NgModule({
  declarations: [
    jobGreen
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(jobGreen, {
			preloadModules: true,
			scrollPadding: false,
			scrollAssist: true,
			autoFocusAssist: false
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    jobGreen
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PruebaServiceProvider
  ]
})
export class AppModule {}
