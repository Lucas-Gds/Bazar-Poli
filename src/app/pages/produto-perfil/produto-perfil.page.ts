import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MessageService } from 'src/app/services/message.service';
import { ActionSheetController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-produto-perfil',
  templateUrl: './produto-perfil.page.html',
  styleUrls: ['./produto-perfil.page.scss'],
})
export class ProdutoPerfilPage implements OnInit {
  slideOpts = {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
  }
  public user: any;
  public id: string = null;
  public produto: Produto;
  public preview: string = null;
  public random: string = "";
  public index: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router,
    private camera: Camera,
    public msg: MessageService,
    public actionSheetController: ActionSheetController,
    public usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.verificarProduto();

  }
  ionViewWillEnter() {
    this.verfUser()
  }
  async verfUser() {
    await this.usuarioService.auth.user.subscribe(
      res => {
        if (res)
          this.usuarioService.get(res.uid).subscribe(
            res => {
              this.user = res;
              console.log(res);
            }
          )
      },
      err => {
        this.user = null
      }
    )
  }
  verificarProduto() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.produtoService.get(this.id).subscribe(
        res => {
          this.produto = res
          this.preview = this.produto.galeria[this.produto.foto];
          this.index = this.produto.foto;
        })
    }
  }
  tirarFoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then(
      (imageData) => {
        // fotoData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.preview = 'data:image/jpeg;base64,' + imageData;

        this.produto.galeria.push(this.preview);
        this.produto.foto = this.produto.galeria.length - 1;
        this.msg.presentLoading();
        this.produtoService.updatePhoto(this.id, this.produto.foto, this.produto.galeria).then(
          () => {
            this.msg.dismissLoading()
          }
        )
      }, (err) => {
        // Handle error
        console.log("Camera issue: " + err);
      }
    );
  }
  escolherFoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then(
      (imageData) => {
        // fotoData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.preview = 'data:image/jpeg;base64,' + imageData;
        this.produto.galeria.push(this.preview);
        this.produto.foto = this.produto.galeria.length - 1;
        this.msg.presentLoading();
        this.produtoService.updatePhoto(this.id, this.produto.foto, this.produto.galeria).then(
          () => {
            this.msg.dismissLoading()
          }
        )
      }, (err) => {
        // Handle error
        console.log("Camera issue: " + err);
      }
    );
  }
  async alterarFoto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Escolha a origem da fotom.',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          this.tirarFoto()
        }
      }, {
        text: 'Galeria',
        icon: 'foto',
        handler: () => {
          this.escolherFoto()
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async opcaoFoto(index) {
    const actionSheet2 = await this.actionSheetController.create({
      header: 'O que fazer com a foto?',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Definir como padrão',
        icon: 'foto',
        handler: () => {

          this.msg.presentLoading();
          this.produtoService.updatePhoto(this.id, index, this.produto.galeria).then(
            res => {
              console.log(res);
              this.msg.dismissLoading()
            }
          )
        }
      }, {
        text: 'Apagar da Galeria',
        icon: 'trash',
        handler: () => {
          this.index = this.produto.foto;
          this.preview = this.produto.galeria[this.produto.foto];
          this.index = index <= this.index ? this.index - 1 : this.index;
          this.produto.galeria.splice(index, 1)
          
          this.msg.presentLoading();
          
          this.produtoService.updatePhoto(this.id, this.index, this.produto.galeria).then(
            res => {
              console.log(res);

              this.msg.dismissLoading()
            }
          )
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet2.present();
}


}
