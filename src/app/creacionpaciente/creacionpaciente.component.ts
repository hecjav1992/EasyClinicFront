import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-creacionpaciente',
  templateUrl: './creacionpaciente.component.html',
  styleUrl: './creacionpaciente.component.css'
})
export class CreacionpacienteComponent {

  constructor(private fb: FormBuilder) { }

  patientForm = this.fb.group({
    domicilio: [false],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    sexo: ['', Validators.required],
    cedula: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    edad: ['', Validators.required],
    ocupacion: [''],
    telefono: ['', [Validators.pattern('^[0-9]{7,15}$')]],
    email: ['', [Validators.email]],
    direccion: [''],
    contactoEmergencia: [''],
    parentesco: [''],
    telefonoEmergencia: ['', [Validators.pattern('^[0-9]{7,15}$')]]
  });

  onSubmit() {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);
      alert('Datos guardados correctamente');
      this.patientForm.reset();
    } else {
      alert('Por favor complete los campos obligatorios');
    }
  }

}
