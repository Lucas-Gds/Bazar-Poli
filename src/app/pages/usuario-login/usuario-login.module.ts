import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioLoginPageRoutingModule } from './usuario-login-routing.module';

import { UsuarioLoginPage } from './usuario-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioLoginPageRoutingModule
  ],
  declarations: [UsuarioLoginPage]
})
export class UsuarioLoginPageModule {}
