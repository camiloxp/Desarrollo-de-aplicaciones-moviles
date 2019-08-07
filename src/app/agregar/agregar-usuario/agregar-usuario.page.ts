import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.page.html',
  styleUrls: ['./agregar-usuario.page.scss'],
})
export class AgregarUsuarioPage implements OnInit {

  formUsuario:FormGroup;
  mensajesError = {
    'nombreCompleto':[
      { type: 'required',message:'Ingrese su nombre' },
      { type: 'minlength',message:'Ingrese un minimo de 10 caracteres'},
      { type: 'maxlength',message:'Ingrese como maximo 70 caracteres'}
    ],
    'correo':[
      { type: 'required',message:'Ingrese su correo'},
      { type: 'minlength',message:'Ingrese un minimo de 15 caracteres'},
      { type: 'maxlength',message:'Ingrese como maximo 50 caracteres'}
    ],
    'usuario':[
      { type: 'required',message:'Ingrese su usuario' },
      { type: 'minlength',message:'Ingrese un minimo de 10 caracteres'},
      { type: 'maxlength',message:'Ingrese como maximo 50 caracteres'}
    ]
  }

  constructor(
    private formBuilder:FormBuilder,
    private alertController:AlertController,
    private actionSheetController:ActionSheetController,
    private router:Router
  ) {
    this.formUsuario = this.formBuilder.group({
      nombreCompleto: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(70)
      ])),
      sexo: new FormControl('',Validators.compose([
        Validators.required
      ])),
      correo: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(50)
      ])),
      usuario: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ])),
      contraseña: new FormControl('',Validators.compose([
        Validators.required
      ])),
      noticias: new FormControl('',Validators.compose([
        Validators.required
      ])),
      terminosCondiciones: new FormControl('',Validators.compose([
        Validators.required
      ]))
    });
  }
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
      header:'Usuario agregado',
      message:'Usuario agregado correctamente',
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
