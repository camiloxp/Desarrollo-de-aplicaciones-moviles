import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgregarCelularesPage } from './agregar-celulares.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarCelularesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgregarCelularesPage]
})
export class AgregarCelularesPageModule {}
