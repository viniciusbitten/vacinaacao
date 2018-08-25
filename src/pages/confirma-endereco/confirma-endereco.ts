import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmaTelefonePage } from '../confirma-telefone/confirma-telefone';
import { EditarEnderecoPage } from '../editar-endereco/editar-endereco';
import { Paciente } from '../../models/paciente';

/**
 * Generated class for the ConfirmaEnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-confirma-endereco',
  templateUrl: 'confirma-endereco.html',
})
export class ConfirmaEnderecoPage {

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
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmaEnderecoPage');
  }

  confirma(){
    this.navCtrl.push(ConfirmaTelefonePage);
  }

  updateEndereco(){
    this.navCtrl.push(EditarEnderecoPage);
  }

}
