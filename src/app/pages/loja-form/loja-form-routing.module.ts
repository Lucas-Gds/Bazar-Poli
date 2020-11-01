import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LojaFormPage } from './loja-form.page';

const routes: Routes = [
  {
    path: '',
    component: LojaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LojaFormPageRoutingModule {}
