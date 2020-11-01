import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LojaLocaisPage } from './loja-locais.page';
import { LojaLocaisPageRoutingModule } from './loja-locais-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LojaLocaisPageRoutingModule
  ],
  declarations: [LojaLocaisPage]
})
export class LojaLocaisPageModule {}
