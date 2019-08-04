import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-consolas',
  templateUrl: './agregar-consolas.page.html',
  styleUrls: ['./agregar-consolas.page.scss'],
})
export class AgregarConsolasPage implements OnInit {

  formConsola:FormGroup;
  mensajesError = {
    'nombre':[
      { type: 'required',message:'Ingrese nombre del producto' }
    ],
    'descripcion':[
      { type: 'required',message:'Ingrese descripcion del producto'}
    ],
    'precio':[
      { type: 'required',message:'Ingrese precio del producto' }
    ]
  }

  constructor(private formBuilder:FormBuilder,
    private alertController:AlertController,
    private actionSheetController:ActionSheetController,
    private router:Router
    )
   {
    this.formConsola = this.formBuilder.group({
      nombre: new FormControl('',Validators.compose([
        Validators.required
      ])),
      descripcion: new FormControl('',Validators.compose([
        Validators.required
      ])),
      precio: new FormControl('',Validators.compose([
        Validators.required
      ]))
    });
  }
  volver(){
    this.router.navigate(['/menu-principal/menu-consolas']);
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
      header:'Producto agregado',
      message:'Producto agregado correctamente',
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
