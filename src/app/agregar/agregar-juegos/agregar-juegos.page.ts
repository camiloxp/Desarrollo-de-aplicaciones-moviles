import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PrecioValidator } from '../../validators/MaxPrecio.validator';

@Component({
  selector: 'app-agregar-juegos',
  templateUrl: './agregar-juegos.page.html',
  styleUrls: ['./agregar-juegos.page.scss'],
})
export class AgregarJuegosPage implements OnInit {

  formJuego:FormGroup;
  mensajesError = {
    'nombre':[
      { type: 'required',message:'Ingrese nombre del producto' },
      { type: 'minlength',message:'Ingrese un minimo de 10 caracteres'},
      { type: 'maxlength',message:'Ingrese como maximo 50 caracteres'}
    ],
    'descripcion':[
      { type: 'required',message:'Ingrese descripcion del producto'},
      { type: 'minlength',message:'Ingrese un minimo de 10 caracteres'},
      { type: 'maxlength',message:'Ingrese como maximo 100 caracteres'}
    ],
    'precio':[
      { type: 'required',message:'Ingrese precio del producto' },
      { type: 'validarPrecio',message:'Precio excede 1.000.000'}
    ]
  }

  constructor(
    private formBuilder:FormBuilder,
    private alertController:AlertController,
    private actionSheetController:ActionSheetController,
    private router:Router
    )
    {
    this.formJuego = this.formBuilder.group({
      nombre: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ])),
      descripcion: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(150)
      ])),
      plataforma: new FormControl('',Validators.compose([
        Validators.required
      ])),
      fechaLanzamiento: new FormControl('',Validators.compose([
        Validators.required
      ])),
      precio: new FormControl('',Validators.compose([
        Validators.required,
        PrecioValidator.validarPrecio
      ]))
    });
    }
    volver(){
      this.router.navigate(['/menu-principal/menu-juegos']);
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
            text:'Aceptar',
            handler:()=>{
              this.volver()
            }
          }
        ]
      });
      await alerta.present();
    }
  ngOnInit() {
  }
}
