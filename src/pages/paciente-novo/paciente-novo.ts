import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../models/paciente';
import { CEPService } from '../../util/cep.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { VacinasPacientePage } from '../vacinas-paciente/vacinas-paciente';

/**
 * Generated class for the PacienteNovoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-paciente-novo',
  templateUrl: 'paciente-novo.html',
})
export class PacienteNovoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private cepService : CEPService, private loadingCtrl: LoadingController) {
    this.paciente.cep = "";
  }

  paciente = new Paciente();


  completaCEP(){
    if(this.paciente.cep.length < 9) return;
    const loader = this.loadingCtrl.create({
      content: "Obtendo endereço..."
    });
    loader.present();

    this.cepService.find(this.paciente.cep).subscribe(data => {
      if(data.logradouro)
        this.paciente.logradouro = data.logradouro;
      this.paciente.bairro = data.bairro;
      this.paciente.cidade = data.localidade;
      this.paciente.uf = data.uf;
      loader.dismiss();
  }
    , error => {});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacienteNovoPage');
  }

  gravar(){
    this.navCtrl.setRoot(VacinasPacientePage);
  }

}
