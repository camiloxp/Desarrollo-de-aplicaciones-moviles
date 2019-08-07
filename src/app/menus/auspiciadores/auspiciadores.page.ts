import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-auspiciadores',
  templateUrl: './auspiciadores.page.html',
  styleUrls: ['./auspiciadores.page.scss'],
})
export class AuspiciadoresPage implements OnInit {

  constructor(private router:Router, private actionSheetController:ActionSheetController, alertController:AlertController) { }

  volver(){
    this.router.navigate(['/menu-principal/menu-base']);
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
  async mensajeAgregar(){
    const alerta = await this.alertController.create({
      header:'Confirmación',
      message:'Comentario enviado',
      buttons:[
        {
          text:'Aceptar'
        }
      ]
    });
    await alerta.present();
  }
  ngOnInit() {
  }

}
