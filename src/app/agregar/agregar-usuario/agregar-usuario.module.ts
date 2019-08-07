import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgregarUsuarioPage } from './agregar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgregarUsuarioPage]
})
export class AgregarUsuarioPageModule {}
