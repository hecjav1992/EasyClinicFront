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

  usuarios: any[]=[];
  constructor(private ConsultaService: ConsultaService) { }

  filtroUsuario = '';
  usuariosFiltrados = this.usuarios;

 
  
  filtrarUsuarios() {
    this.ConsultaService.consultapaciente().subscribe({
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
  
}
