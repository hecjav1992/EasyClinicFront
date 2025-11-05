import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../service/consulta.service';
import { HttpClient } from '@angular/common/http';



@Component({
  standalone: false,
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent  {

  usuarios: any[] = [];
  constructor(private ConsultaService: ConsultaService) { }
  filtroUsuario = '';
  nombre = "";
  cedula = "";
  genero = "";
  valor: any;;
  edad:any;
  meses:any;
  dias:any;
  hoy: any;
  usuariosFiltrados = this.usuarios;

  filtrarUsuarios() {
    this.ConsultaService.consultapaciente(this.filtroUsuario).subscribe({
      next: res => {
        this.usuariosFiltrados = res.message;
      }
    });
    const filtro = this.filtroUsuario.toLowerCase();
    this.usuariosFiltrados = this.usuarios.filter(
      (u) =>
        u.id.toLowerCase().includes(filtro) ||
        u.nombre.toLowerCase().includes(filtro)
    );
  }
  data(id: any) {
    this.ConsultaService.buscardata(id).subscribe({
      next: res => {
        this.nombre = res.message[0].nombre;
        this.cedula = res.message[0].cedula;
        this.genero = res.message[0].genero_paciente;
        this.hoy = new Date();
        this.edad = this.hoy.getFullYear() - new Date(res.message[0].fN_paciente).getFullYear();
        this.meses =this.hoy.getMonth() - new Date(res.message[0].fN_paciente).getMonth();
        this.dias = this.hoy.getDate() - new Date(res.message[0].fN_paciente).getDate();
        if (this.meses < 0 || (this.meses === 0 && this.dias < 0)) {
          this.edad--;
          this.meses += 12;
        }

        if (this.dias < 0) {
          const ultimoDiaMesAnterior = new Date(this.hoy.getFullYear(), this.hoy.getMonth(), 0).getDate();
          this.dias += ultimoDiaMesAnterior;
          this.meses--;
          if (this.meses < 0) {
            this.meses += 12;
            this.edad--;
          }
        }

        this.edad = this.edad.toString();
        this.meses = this.meses.toString();
        this.dias = this.dias.toString();
      }
     
    });
    this.ConsultaService.historialpaciente(id).subscribe({
      next: data => {
        this.valor = data.message;
        console.log(data);
      }

    });


  }
  
}
