import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  mensajesError = {
    'nombre' : [
      { type:'required' , message:'Nombre incompleto'},
      { type:'minlength', message:'Ingrese un mínimo de 5 caracteres'},
      { type:'maxlength', message:'Ingrese un máximo de 40 caracteres'}

    ],
    'rut' : [
      { type:'required', message:'Rut incompleto'},
      { type:'minlength', message:'Ingrese un minimo de 5 caracteres'},
      { type:'maxlength', message:'Ingrese un máximo de 9 caracteres'}
    ],
    'email' : [
      { type:'required', message:'Email incompleto'},
      { type:'minlength', message:'Ingrese un minimo de 5 caracteres'},
      

    ],
    'motivo' : [
      { type:'required', message:'Motivo incompleto'},
      
    ],
    'comentario' : [
      { type:'required', message:'Comentario incompleto'},
      { type:'minlength', message:'Ingrese un minimo de 10 caracteres'},
      { type:'maxlength', message:'Ingrese un máximo de 200 caracteres'}
    ]
  };
  formContacto:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router, private alertController:AlertController, private actionSheetController:ActionSheetController) {
    this.formContacto = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)
      ])),
      rut: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.minLength(5),
        Validators.maxLength(9)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      motivo: new FormControl('', Validators.compose([
        Validators.required
      ])),
      comentario: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200)
      ])),
    })
   }

  ngOnInit() {
  }

  volverMenu(){
    this.router.navigate(['/menu-principal/menu-base']);
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

}
