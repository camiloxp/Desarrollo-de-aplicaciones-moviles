import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';

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
    'precio':[
      { type: 'required',message:'Ingrese precio del producto' }
    ]
  }
  constructor(private formBuilder:FormBuilder,private alertController:AlertController) {
    this.formCelular = this.formBuilder.group({
      nombre: new FormControl('',Validators.compose([
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
   async mensajeAgregar(){
     const alerta = await this.alertController.create({
       header:'Productos agregado',
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
