import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarTelefonePage } from '../editar-telefone/editar-telefone';
import { VacinasPacientePage } from '../vacinas-paciente/vacinas-paciente';
import { Paciente } from '../../models/paciente';

/**
 * Generated class for the ConfirmaTelefonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-confirma-telefone',
  templateUrl: 'confirma-telefone.html',
})
export class ConfirmaTelefonePage {

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
    //this.paciente.telefone = "(21) 99735-5285";
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmaTelefonePage');
    this.paciente.telefone = "(21) 99735-5285";
  }

  updateTelefone(){
    this.navCtrl.push(EditarTelefonePage);
  }

  confirma(){
    this.navCtrl.setRoot(VacinasPacientePage);
  }

}
