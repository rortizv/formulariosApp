import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)] ],
    favoritos: this.formBuilder.array( [
      ['Contra', Validators.required],
      ['Ninja Gaiden', Validators.required],
    ], Validators.required ) 
  });

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required );

  get favoritosArray() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder ) { }

  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors 
        && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    
    if( this.nuevoFavorito.invalid ) { return; }
    
    this.favoritosArray.push( this.formBuilder.control(this.nuevoFavorito.value, Validators.required) );

    this.nuevoFavorito.reset();

  }

  borrar(i: number) {
    this.favoritosArray.removeAt(i);
  }

  guardar() {
    if( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    //Imprime el valor del formulario únicamente si es válido
    console.log(this.miFormulario.value);
  }

}
