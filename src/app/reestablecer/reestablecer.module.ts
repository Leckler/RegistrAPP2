import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestablecerPageRoutingModule } from './reestablecer-routing.module';

import { ReestablecerPage } from './reestablecer.page';

import { CompartirModule } from '../compartir/compartir.module';
import { RouterModule } from '@angular/router';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestablecerPageRoutingModule,
    CompartirModule,
    RouterModule
  ],
  declarations: [ReestablecerPage]
})
export class ReestablecerPageModule {}
