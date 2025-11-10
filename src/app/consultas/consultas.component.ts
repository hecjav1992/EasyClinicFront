import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../service/consulta.service';
import { HttpClient } from '@angular/common/http';
import { ChartType } from 'angular-google-charts';

declare var google: any;

@Component({
  standalone: false,
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent  {
  googleLoaded: boolean = false;
  usuarios: any[] = [];
  constructor(private ConsultaService: ConsultaService) { }
  filtroUsuario = '';
  nombre = "";
  cedula = "";
  genero = "";
  alergia = "";
  valor: any;;
  edad:any;
  meses:any;
  dias:any;
  hoy: any;
  type1: any = ChartType.Line;
  data1: any;
  data2: any;
  usuariosFiltrados = this.usuarios;
  columnNames1 = ["Fecha Atención", "Peso", { role: "style" }, { role: "annotation" }];
  columnNames2 = ["Fecha Atención", "Talla", { role: "style" }, { role: "annotation" }];
  options = {
    title: "Peso",
    with: "100%",
    tooltip: {
      textStyle: { color: "blue", fontName: "Tahoma", fontSize: "15" }
    }
  };
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
        console.log(res.message);
        this.nombre = res.message[0].nombre;
        this.cedula = res.message[0].cedula;
        this.genero = res.message[0].genero_paciente;
        this.alergia = res.message[0].alergias_paciente;
        this.hoy = new Date();
        this.edad = this.hoy.getFullYear() - new Date(res.message[0].fN_paciente).getFullYear();
        this.meses = this.hoy.getMonth() - new Date(res.message[0].fN_paciente).getMonth();
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
    this.ConsultaService.historialpaciente(id).subscribe  ({
      next: data => {
        this.valor = data.message;
        this.data1 = [];
        this.data2 = [];
        this.valor.forEach((item: any) => {
          const fecha = new Date(item.fecha_atencion);
          const dia = fecha.getDate().toString().padStart(2, '0');
          const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
          const year = fecha.getFullYear();
          const fechaFormateada = `${dia}-${mes}-${year}`;
          if (item.hra) {
            this.data1.push([
              fechaFormateada,
              item.peso,
              "color: rgb(143, 27, 0)",
              "$6"
            ]);
            this.data2.push([
              fechaFormateada,
              item.talla_atencion,
              "color: rgb(143, 27, 0)",
              "$6"
            ]);
          }
        });
      }
    });

  }

  }




