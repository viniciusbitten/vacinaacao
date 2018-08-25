import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the VacinasPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vacinas-paciente',
  templateUrl: 'vacinas-paciente.html',
})
export class VacinasPacientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var dados = this.navParams.data.dados;
    console.log("dados:");
    console.log(dados);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VacinasPacientePage');
  }

  fechar(){
    this.navCtrl.setRoot(HomePage);
  }

}
