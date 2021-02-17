import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAnnoncePage } from './view-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAnnoncePageRoutingModule {}
