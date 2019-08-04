import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-celulares',
  templateUrl: './agregar-celulares.page.html',
  styleUrls: ['./agregar-celulares.page.scss'],
})
export class AgregarCelularesPage implements OnInit {


  formCelular:FormGroup;
  mensajesError = {
    'nombre':[
      { type: 'required',message:'Ingrese nombre del producto' }
    ],
    'caracteristicas':[
      { type: 'required',message:'Ingrese caracteristicas del producto'}
    ],
    'precio':[
      { type: 'required',message:'Ingrese precio del producto' }
    ]
  }
  constructor(
    private formBuilder:FormBuilder,
    private alertController:AlertController,
    private actionSheetController:ActionSheetController,
    private router:Router
    )
    {
    this.formCelular = this.formBuilder.group({
      nombre: new FormControl('',Validators.compose([
        Validators.required
      ])),
      caracteristicas: new FormControl('',Validators.compose([
        Validators.required
      ])),
      marca: new FormControl('',Validators.compose([
        Validators.required
      ])),
      precio: new FormControl('',Validators.compose([
        Validators.required
      ]))
    });
   }
   volver(){
     this.router.navigate(['/menu-principal/menu-celulares']);
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
