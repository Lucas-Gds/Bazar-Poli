import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { MessageService } from 'src/app/services/message.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.page.html',
  styleUrls: ['./usuario-list.page.scss'],
})
export class UsuarioListPage implements OnInit {

  public usuarios: Usuario[] = []

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private alertController: AlertController,
    private msg: MessageService
  ) { }

  ngOnInit() {
    this.usuarioService.getAll().subscribe(
      res => {
        this.usuarios = res
      }
    )
  }
  async remover(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar!',
      message: 'Deseja apagar os dados do usuário?',
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
            this.usuarioService.remover(id).then(
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
