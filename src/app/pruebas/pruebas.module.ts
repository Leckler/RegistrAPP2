import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebasPageRoutingModule } from './pruebas-routing.module';

import { PruebasPage } from './pruebas.page';

import { CompartirModule } from '../compartir/compartir.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebasPageRoutingModule,
    CompartirModule,
    MatSlideToggleModule,
  ],
  declarations: [PruebasPage]
})
export class PruebasPageModule {}
