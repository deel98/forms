import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  formularioCreado!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formularioCreado = this.formBuilder.group({
      nombre: ['David', Validators.required],
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      contrasena: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  agregar() {
    console.log(this.formularioCreado.value);
  }
}