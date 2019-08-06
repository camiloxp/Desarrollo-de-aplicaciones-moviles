import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  mensajError = {
    'usuario' : [
      { type:'required', message:'Usuario incompleto'},
    ],
    'password' : [
      { type:'required', message:'Contraseña incompleta'}
    ]

  };
  formHome:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) {
    this.formHome = this.formBuilder.group({
      usuario: new FormControl('',Validators.compose([
        Validators.required
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required
      ]))
    });
  }
  ingresarMenu(){
    this.router.navigate(['/menu-principal']);
  }
  procesarDatos(){
    if (this.formHome.value.usuario == "admin" && this.formHome.value.password == "admin"){
      this.ingresarMenu()
    }else{
      //this.mensajError = "Error credenciales incorrectas"
    };
  }

}
