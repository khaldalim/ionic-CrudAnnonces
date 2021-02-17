import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAnnoncesPage } from './list-annonces.page';

const routes: Routes = [
  {
    path: '',
    component: ListAnnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAnnoncesPageRoutingModule {}
