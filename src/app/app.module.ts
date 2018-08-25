import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ConfirmaEnderecoPage } from '../pages/confirma-endereco/confirma-endereco';
import { ConfirmaTelefonePage } from '../pages/confirma-telefone/confirma-telefone';
import { EditarEnderecoPage } from '../pages/editar-endereco/editar-endereco';
import { TextMaskModule } from 'angular2-text-mask';
import { CEPService } from '../util/cep.service';
import { HttpModule } from '@angular/http';
import { EditarTelefonePage } from '../pages/editar-telefone/editar-telefone';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { VacinasPacientePage } from '../pages/vacinas-paciente/vacinas-paciente';
import { PacienteNovoPage } from '../pages/paciente-novo/paciente-novo';
import { PacienteService } from '../paciente.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ConfirmaEnderecoPage,
    ConfirmaTelefonePage,
    EditarEnderecoPage,
    EditarTelefonePage,
    VacinasPacientePage,
    PacienteNovoPage
  ],
  imports: [
    BrowserModule,
    TextMaskModule,
    HttpModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp, {backButtonText: "Voltar"}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ConfirmaEnderecoPage,
    ConfirmaTelefonePage,
    EditarEnderecoPage,
    EditarTelefonePage,
    VacinasPacientePage,
    PacienteNovoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CEPService,
    PacienteService
  ]
})
export class AppModule {}
