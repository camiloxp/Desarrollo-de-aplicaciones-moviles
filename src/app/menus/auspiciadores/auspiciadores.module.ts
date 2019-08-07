import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuspiciadoresPage } from './auspiciadores.page';

const routes: Routes = [
  {
    path: '',
    component: AuspiciadoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuspiciadoresPage]
})
export class AuspiciadoresPageModule {}
