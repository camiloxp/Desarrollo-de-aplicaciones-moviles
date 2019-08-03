import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgregarConsolasPage } from './agregar-consolas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarConsolasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgregarConsolasPage]
})
export class AgregarConsolasPageModule {}
