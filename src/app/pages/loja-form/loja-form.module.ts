import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LojaFormPageRoutingModule } from './loja-form-routing.module';

import { LojaFormPage } from './loja-form.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LojaFormPageRoutingModule

  ],
  declarations: [LojaFormPage]
})
export class LojaFormPageModule {}
