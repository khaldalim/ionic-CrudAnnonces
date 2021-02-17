import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAnnoncesPageRoutingModule } from './list-annonces-routing.module';

import { ListAnnoncesPage } from './list-annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAnnoncesPageRoutingModule
  ],
  declarations: [ListAnnoncesPage]
})
export class ListAnnoncesPageModule {}
