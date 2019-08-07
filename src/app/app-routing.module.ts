import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './menus/menu-principal/menu-principal.module#MenuPrincipalPageModule' },
  { path: 'agregar-celulares', loadChildren: './agregar/agregar-celulares/agregar-celulares.module#AgregarCelularesPageModule' },
  { path: 'agregar-consolas', loadChildren: './agregar/agregar-consolas/agregar-consolas.module#AgregarConsolasPageModule' },
  { path: 'agregar-juegos', loadChildren: './agregar/agregar-juegos/agregar-juegos.module#AgregarJuegosPageModule' },
  { path: 'listar-celulares', loadChildren: './listar/listar-celulares/listar-celulares.module#ListarCelularesPageModule' },
  { path: 'listar-consolas', loadChildren: './listar/listar-consolas/listar-consolas.module#ListarConsolasPageModule' },
  { path: 'listar-juegos', loadChildren: './listar/listar-juegos/listar-juegos.module#ListarJuegosPageModule' },
  { path: 'agregar-usuario', loadChildren: './agregar/agregar-usuario/agregar-usuario.module#AgregarUsuarioPageModule' },  { path: 'pago', loadChildren: './pago/pago.module#PagoPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
