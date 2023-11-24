import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RGPageRoutingModule } from './rg-routing.module';

import { RGPage } from './rg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RGPageRoutingModule
  ],
  declarations: [RGPage]
})
export class RGPageModule {}
