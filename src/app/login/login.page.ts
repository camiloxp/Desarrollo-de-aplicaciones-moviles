import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formHome:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) {
    this.formHome = this.formBuilder.group({
      usuario: new FormControl('',Validators.compose([
        Validators.required
      ])),
      contraseña: new FormControl('',Validators.compose([
        Validators.required
      ]))
    });
  }
  ingresarMenu(){
    this.router.navigate(['/menu-principal']);
  }
  procesarDatos(){
    if (this.formHome.value.usuario == "admin" && this.formHome.value.contraseña == "123"){
      this.ingresarMenu()
    }else{
      this.mensajError = "Error credenciales incorrectas"
    };
  }

}
