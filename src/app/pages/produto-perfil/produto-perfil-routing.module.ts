import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoPerfilPage } from './produto-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoPerfilPageRoutingModule {}
