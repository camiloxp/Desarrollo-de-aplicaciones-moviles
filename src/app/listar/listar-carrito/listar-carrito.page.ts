import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-listar-carrito',
  templateUrl: './listar-carrito.page.html',
  styleUrls: ['./listar-carrito.page.scss'],
})
export class ListarCarritoPage implements OnInit {

  constructor(private router:Router, private alertController:AlertController, private actionSheetController:ActionSheetController) { }

  
  volver(){
    this.router.navigate(['/menu-principal']);
  }

  pago(){
    this.router.navigate(['/pago'])
  }
  async volverMenu(){
    const actionsheet = await this.actionSheetController.create({
      header:'¿Desea volver al menu?',
      buttons:[
        {
          text:'Cancelar'
        },
        {
          text:'Aceptar',
          handler:()=>{
            this.volver()
          }
        }
      ]
    });
    await actionsheet.present();
  }
  async mensajePagar(){
    const alerta = await this.alertController.create({
      header:'Confirmación',
      message:'Pedido Pagado',
      buttons:[
        {
          text:'Aceptar',
          handler:()=>{
            this.pago()
          }
        }
      ]
    });
    await alerta.present();
  }
  ngOnInit() {
  }

}
