import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPrincipalPage } from './menu-principal.page';

const routes: Routes = [
  {
    path: 'menu-principal',
    component: MenuPrincipalPage,
    children:[
      { path: 'menu-juegos', loadChildren: '../menu-juegos/menu-juegos.module#MenuJuegosPageModule' },
      { path: 'menu-celulares', loadChildren: '../menu-celulares/menu-celulares.module#MenuCelularesPageModule' },
      { path: 'menu-consolas', loadChildren: '../menu-consolas/menu-consolas.module#MenuConsolasPageModule' },
    ]
  },
  {
    path:'',redirectTo:'menu-principal/menu-juegos'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPrincipalPage]
})
export class MenuPrincipalPageModule {}
