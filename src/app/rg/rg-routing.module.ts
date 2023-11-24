import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RGPage } from './rg.page';

const routes: Routes = [
  {
    path: '',
    component: RGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RGPageRoutingModule {}
