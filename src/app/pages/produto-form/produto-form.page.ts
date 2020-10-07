import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.page.html',
  styleUrls: ['./produto-form.page.scss'],
})
export class ProdutoFormPage implements OnInit {

  public produto: Produto = new Produto;


  constructor(
    private produtoService: ProdutoService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }
  AddProd(form){
    console.log(form);
    if (form.valid){
      this.produtoService.add(this.produto).then(
        res=>{
          console.log("Cadastrado!", res);
          this.presentAlert("Aviso", "Produto Cadastrado!");
        },
        err=>{
          console.error("Erro:", err);
          this.presentAlert("Erro:", "Erro ao cadastrar produto");
        }
      )
    }
  }

  async presentAlert(tipo:string, texto:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }
}
