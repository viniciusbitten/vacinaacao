import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CEPService } from '../../util/cep.service';
import { LoadingController } from 'ionic-angular';
import { ConfirmaTelefonePage } from '../confirma-telefone/confirma-telefone';
import { Paciente } from '../../models/paciente';

/**
 * Generated class for the EditarEnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editar-endereco',
  templateUrl: 'editar-endereco.html',
})
export class EditarEnderecoPage {
  @ViewChild('cep') myInput ;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private cepService : CEPService, private loadingCtrl: LoadingController) {
    this.paciente.nome = "José Sá";
    this.paciente.logradouro = "Rua Pereira da Silva";
    this.paciente.numero = "290"
    this.paciente.complemento = "Apto 602"
    this.paciente.bairro = "Icaraí";
    this.paciente.cidade = "Niterói";
    this.paciente.uf = "RJ";
    this.paciente.cep = "24220-030";
  }

  
  originalCEP;
  cepInformado = false;

  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[1-9]/, /\d/, /\d/ ] ;

  paciente = new Paciente();

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarEnderecoPage');
    this.originalCEP = this.paciente.cep;
  }

  isCEPValid(){
    console.log(this.paciente);
    if(this.paciente === null) return false;
    if (this.paciente.cep.length != 9) return false;
    return true;
  }

  continuar(){
    if(this.originalCEP != this.paciente.cep){

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

    this.cepInformado = true;    
  }

  gravar(){
    this.navCtrl.pop();
    this.navCtrl.push(ConfirmaTelefonePage);
  }

}
