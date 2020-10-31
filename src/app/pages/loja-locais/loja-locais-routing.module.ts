import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LojaLocaisPage } from './loja-locais.page';

const routes: Routes = [
  {
    path: '',
    component: LojaLocaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LojaLocaisPageRoutingModule {}
