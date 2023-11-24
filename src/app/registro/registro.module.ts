import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';
import { CompartirModule } from '../compartir/compartir.module';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    CompartirModule,
    RouterModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
