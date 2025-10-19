import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Modal } from 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-movil',
  templateUrl: './app-movil.component.html',
  styleUrls: ['./app-movil.component.css']
})
export class AppMovilComponent {
  step = 1; // Página actual
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      // DATOS GENERALES
      traumatismo: [''],
      incompatibilidadRh: [''],
      padecimientosRespiratorios: this.fb.group({
        rinitis: [false],
        sinusitis: [false],
        asma: [false]
      }),
      resfriadosConstantes: [''],
      amigdalitis: [''],
      respiracionBucal: [''],
      observaciones: [''],

      // DESARROLLO PSICOMOTOR
      controlCefalico: [''],
      sedestacion: [''],
      gateo: [''],
      marchaLibre: [''],
      primerosDientes: [''],
      sonrisaSocial: [''],
      balbuceo: [''],
      monosilabos: [''],
      frasesSencillas: [''],

      // DESARROLLO SOCIOAFECTIVO
      controlEsfinteres: this.fb.group({
        urinario: [''],
        anal: ['']
      }),
      tipoSueno: [''],
      temores: [''],
      timidez: [''],
      agresividad: [''],

      // ANTECEDENTES
      antecedentesHereditarios: [''],
      edadPadres: this.fb.group({
        mama: [''],
        papa: ['']
      }),
      controlPrenatal: [''],
      complicacionesEmbarazo: [''],
      alimentacionMadre: [''],
      estadoEmocionalMadre: [''],

      // ALIMENTACIÓN
      lactancia: ['materna'],
      dificultadSuccion: [''],
      masticacion: [''],
      deglucion: [''],
      firma: ['']
    });
  }

  next() {
    if (this.step < 4) this.step++;
  }

  prev() {
    if (this.step > 1) this.step--;
  }

  submit() {
    if (this.form.valid) {
      Swal.fire("Evaluacion", "Tu Evaluacion se guardó correctamente", "success");
      this.step = 1;
      this.router.navigate(['App']);
      
    } else {
      alert('Complete los campos requeridos.');
    }
  }
}

