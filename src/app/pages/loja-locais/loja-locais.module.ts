import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LojaLocaisPage } from './loja-locais.page';
import { LojaLocaisPageRoutingModule } from './loja-locais-routing.module';

import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LojaLocaisPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.firebaseConfig.apiKey,
      libraries: ['places', 'drawing', 'geometry']
    })
  ],
  declarations: [LojaLocaisPage]
})
export class LojaLocaisPageModule {}
