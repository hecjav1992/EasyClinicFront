import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConsultaService } from '../../service/consulta.service';
import Swal from 'sweetalert2';

@Component({
  standalone: false,
  selector: 'app-creacionpaciente',
  templateUrl: './creacionpaciente.component.html',
  styleUrl: './creacionpaciente.component.css'
})
export class CreacionpacienteComponent {

  constructor(private fb: FormBuilder, private servicio: ConsultaService) { }

  patientForm = this.fb.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    sexo: ['', Validators.required],
    cedula: ['', Validators.required],
    fechaNacimiento: [null, Validators.required],
    edad: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['', [Validators.email]]
  });
  valor: any = {};
  onSubmit() {
    if (this.patientForm.valid == true) {
      this.valor = {
        "nombre": this.patientForm.value.nombres?.toString(),
        "apellido_paciente": this.patientForm.value.apellidos?.toString(),
        "genero_paciente": this.patientForm.value.sexo?.toString(),
        "cedula": this.patientForm.value.cedula?.toString(),
        "FN_paciente": this.patientForm.value.fechaNacimiento,
        "telefono_paciente": this.patientForm.value.telefono?.toString(),
        "Email_paciente": this.patientForm.value.email?.toString(),
        //"edad_paciente": Number(this.patientForm.value.edad)
      
      }
      Swal.fire({
        title: 'Procesando...',
        text: 'Por favor espere',
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
        allowEscapeKey: false
      });
      this.servicio.crearPaciente(this.valor).subscribe({
        next: res => {
          Swal.close();
          if (res.success == true) {
            Swal.fire({
              icon: 'success',
              title: 'Completado',
              text: res.mensaje
            });
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'ups Error!',
              text: res.mensaje

            });
          }
        }
      });
    }
    else {
      Swal.fire("Error de validacion", "Complete todos los campos", "error");
    }



  }

}
