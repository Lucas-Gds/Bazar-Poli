import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoPerfilPageRoutingModule } from './produto-perfil-routing.module';

import { ProdutoPerfilPage } from './produto-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoPerfilPageRoutingModule
  ],
  declarations: [ProdutoPerfilPage]
})
export class ProdutoPerfilPageModule {}
