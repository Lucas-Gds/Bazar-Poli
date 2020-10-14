import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor( 
    public loadingController:LoadingController,
    public alertController: AlertController,
    ) { }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: 2000
    });
    await loading.present();
  }

  async dismissLoading(){
    await this.loadingController.dismiss();
    console.log('Loading dismissed!');
  }

  async presentAlert(tipo: string, texto: string) {
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
