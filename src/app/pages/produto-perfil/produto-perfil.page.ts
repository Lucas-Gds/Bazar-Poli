import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MessageService } from 'src/app/services/message.service';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-produto-perfil',
  templateUrl: './produto-perfil.page.html',
  styleUrls: ['./produto-perfil.page.scss'],
})
export class ProdutoPerfilPage implements OnInit {

  public id: string = null;
  public produto: Produto;
  public preview: string = null;
  public preview2: string = null;
  public preview3: string = null;


  constructor(
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router,
    private camera: Camera,
    public msg: MessageService,
    public actionSheetController:ActionSheetController
  ) { }

  ngOnInit() {
    this.verificarProduto();

  }

  verificarProduto() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.produtoService.get(this.id).subscribe(
        res => {
          this.produto = res
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
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.preview = 'data:image/jpeg;base64,' + imageData;
        this.produto.image = this.preview;
        //console.log(this.usuario.foto);
        this.msg.presentLoading();
        this.produtoService.updatePhoto(this.id, this.produto.image).then(
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
  escolherFoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.preview = 'data:image/jpeg;base64,' + imageData;
        this.produto.image = this.preview;
        //console.log(this.usuario.foto);
        this.msg.presentLoading();
        this.produtoService.updatePhoto(this.id, this.produto.image).then(
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
      header: 'Escolha a origem da imagem.',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
         this.tirarFoto()
        }
      }, {
        text: 'Galeria',
        icon: 'image',
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

}
