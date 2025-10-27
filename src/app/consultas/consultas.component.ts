import { Component,OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  usuarios = [
    { id: '001',cedula:'1234-321-4332', nombre: 'Juan',apellido: 'Pérez' },
    { id: '002', cedula:'7-708-781', nombre: 'María',apellido:'Gómez' },
    { id: '003', cedula:'8-867-1844', nombre: 'Pedro',apellido:'Díaz' },
  ];

  filtroUsuario = '';
  usuariosFiltrados = this.usuarios;

  ngOnInit(): void {
    this.usuariosFiltrados = this.usuarios;
  }

  filtrarUsuarios() {
    const filtro = this.filtroUsuario.toLowerCase();
    this.usuariosFiltrados = this.usuarios.filter(
      (u) =>
        u.id.toLowerCase().includes(filtro) ||
        u.nombre.toLowerCase().includes(filtro)
    );

  }
}
