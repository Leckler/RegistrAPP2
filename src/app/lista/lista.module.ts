import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';
import { CompartirModule } from '../compartir/compartir.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,
    CompartirModule,
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
