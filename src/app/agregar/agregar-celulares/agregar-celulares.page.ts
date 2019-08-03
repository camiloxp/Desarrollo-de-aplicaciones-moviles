import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-celulares',
  templateUrl: './agregar-celulares.page.html',
  styleUrls: ['./agregar-celulares.page.scss'],
})
export class AgregarCelularesPage implements OnInit {

  formCelular:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.formCelular = this.formBuilder.group({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl()
    });
   }

  ngOnInit() {
  }

}
