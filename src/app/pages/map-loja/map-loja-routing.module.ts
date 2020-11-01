import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapLojaPage } from './map-loja.page';

const routes: Routes = [
  {
    path: '',
    component: MapLojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapLojaPageRoutingModule {}
