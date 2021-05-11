import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('Coffee 1 Lb'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(20)
  // })

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    precio: [ , [Validators.required, Validators.min(0)] ],
    existencias: [ , [Validators.required, Validators.min(1)] ]
  })

  constructor(private formBuilder: FormBuilder ) { }

  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors 
        && this.miFormulario.controls[campo].touched;
  }

}
