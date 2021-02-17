import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAnnoncePageRoutingModule } from './view-annonce-routing.module';

import { ViewAnnoncePage } from './view-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAnnoncePageRoutingModule
  ],
  declarations: [ViewAnnoncePage]
})
export class ViewAnnoncePageModule {}
