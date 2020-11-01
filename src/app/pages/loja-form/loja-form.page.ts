import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Loja } from 'src/app/models/loja';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MessageService } from 'src/app/services/message.service';
import { LojaService } from 'src/app/services/loja.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loja-form',
  templateUrl: './loja-form.page.html',
  styleUrls: ['./loja-form.page.scss'],
})
export class LojaFormPage implements OnInit {

  public loja: Loja = new Loja;
  public lat: number = 0;
  public lng: number = 0;
  public id: string;
  public cep: string = "";

  constructor(
    private geolocation: Geolocation,
    private msg: MessageService,
    private lojaService: LojaService,
    private router: Router
  ) {

  }


  ngOnInit() {
    this.getLocal();
  }

  onSubmit(form) {
    this.loja.lat = this.lat;
    this.loja.lng = this.lng;
    console.log(this.loja)
    if (form.valid) {
      this.msg.presentLoading()
      
        this.lojaService.add(this.loja).then(
          res => {
            console.log("Cadastrado!", res);
            form.reset();
            this.loja = new Loja; // this.lojas = []
            this.msg.presentAlert("Aviso", "Loja cadastrada!");
            this.msg.dismissLoading();
            this.router.navigate([""]);
          },
          err => {
            console.error("Erro:", err);
            this.msg.dismissLoading();
            this.msg.presentAlert("Erro:", "Loja não cadastrada!");
          }
        ).finally(
          () => this.msg.dismissLoading()
        )
      } }

  getLocal() {
    this.geolocation.getCurrentPosition().then(
      (resp) => {
        this.lat = resp.coords.latitude
        this.lng = resp.coords.longitude
      }
    ).catch((error) => {
      console.log('Error getting location', error);
    }
    );
  }

  getCEP() {
    
    this.lojaService.getEndereco(this.cep).subscribe(
      res => {
        if (res.erro) {
          this.msg.presentAlert("Erro", "CEP não localizado");
        } else {
      
          this.loja.cep = res.cep;
          this.loja.endereco = res.logradouro;
          this.loja.bairro = res.bairro;
          this.loja.cidade = res.localidade;
          this.loja.uf = res.uf;

        }
      },
        err => {
          this.msg.presentAlert("Erro", "Não foi possivel localizar o endereço!");
        }
    )
  }

  // buscaCEP() {
  //   this.enderecoService.buscaCEP(this.cep).subscribe(
  //     res => {
  //       this.loja.endereco = res[0]
  //     }
  //   )
  // }

}
