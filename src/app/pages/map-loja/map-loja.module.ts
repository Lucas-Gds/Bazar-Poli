import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapLojaPageRoutingModule } from './map-loja-routing.module';

import { MapLojaPage } from './map-loja.page';

import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: environment.firebaseConfig.apiKey,
      libraries: ['places', 'drawing', 'geometry']
    }),
    MapLojaPageRoutingModule
  ],
  declarations: [MapLojaPage]
})
export class MapLojaPageModule {}
