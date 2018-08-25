import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VacinasPacientePage } from '../vacinas-paciente/vacinas-paciente';
import { Paciente } from '../../models/paciente';

/**
 * Generated class for the EditarTelefonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-editar-telefone',
  templateUrl: 'editar-telefone.html',
})
export class EditarTelefonePage {

  paciente = new Paciente();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.paciente.nome = "José Sá";
    this.paciente.logradouro = "Rua Pereira da Silva";
    this.paciente.numero = "290"
    this.paciente.complemento = "Apto 602"
    this.paciente.bairro = "Icaraí";
    this.paciente.cidade = "Niterói";
    this.paciente.uf = "RJ";
    this.paciente.cep = "24220-030";
    this.paciente.telefone = "(21) 99735-5285";
  }

  pacienteTelefone = "(21) 99735-5285";

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarTelefonePage');
  }

  gravar(){
    this.navCtrl.pop();
    this.navCtrl.setRoot(VacinasPacientePage);
  }

}
