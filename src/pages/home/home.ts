import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ConfirmaEnderecoPage } from '../confirma-endereco/confirma-endereco';
import { PacienteNovoPage } from '../paciente-novo/paciente-novo';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { PacienteService } from '../../paciente.service';
import { VacinasPacientePage } from '../vacinas-paciente/vacinas-paciente';
declare var jQuery;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('input') numero ;
  @ViewChild('nome') nome ;

  constructor(public navCtrl: NavController, private http: Http, private pacienteService : PacienteService, private loadingCtrl : LoadingController) {

  }

  modo = 1;
  numeroCartao : string = "";

  nomeValue = "";
  nomeMaeValue = "";

  buscaCartao(){
    this.navCtrl.push(ConfirmaEnderecoPage);
  }

  buscaNome(){
    if(this.nomeValue === "" || this.nomeMaeValue === "") return;

    const loader = this.loadingCtrl.create({
      content: "Obtendo dados..."
    });
    loader.present();

    this.pacienteService.find(this.nomeValue, this.nomeMaeValue).subscribe(data => {
      loader.dismiss();
      this.navCtrl.push(VacinasPacientePage, {dados: data});
    }, error => {})

    
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.nome.setFocus();
    },150);
   }

   novoCadastro(){
     this.navCtrl.push(PacienteNovoPage);
   }

   modoPesquisa(){
     this.modo = 1;
     setTimeout(() => {
      this.nome.setFocus();
    },150);
   }

   voltar(){
     this.numeroCartao = "";
     this.nomeValue = "";
     this.nomeMaeValue = "";
     this.modo = 0;
   }
 
}
