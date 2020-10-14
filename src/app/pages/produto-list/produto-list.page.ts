import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Produto } from 'src/app/models/produto';
import { MessageService } from 'src/app/services/message.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
})
export class ProdutoListPage implements OnInit {
  public produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private alertController: AlertController,
    private msg: MessageService
  ) { }

  ngOnInit() {
    this.produtoService.gerarTodos().subscribe(
      resultado => {
        this.produtos = resultado;
      }
      )
  }
  async remover(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar!',
      message: 'Deseja apagar os dados do produto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            this.msg.presentLoading();
            this.produtoService.remove(id).then(
              () => {
                this.msg.dismissLoading()
                this.router.navigate([""]);
              },
              err => {
                this.msg.dismissLoading()
                console.log("Erro: ", err);
              }
            )
          }
        }
      ]
    });
    await alert.present();
  }
  

}
