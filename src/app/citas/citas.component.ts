import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarView, CalendarEvent, CalendarModule } from 'angular-calendar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, CalendarModule],
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  constructor() { }

  titulo: any=null;
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  events: CalendarEvent[] = [];

  async onHourClicked(date: Date) {
    this.titulo = await this.valor();
    this.events = [
     ...this.events,
      {
        start: date,
        title: this.titulo,
        color: {
          primary: "yellow",
          secondary:"red"
        }        
      }
    ];
    
  }


  async valor() {
    const result = await Swal.fire({
      title: "Reserva Cita",
      input: "text",
      inputPlaceholder: "Nombre del Paciente",
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off"
      },
      showCancelButton: true,
    });
    if (result.isConfirmed) {
      return result.value;
    }
  }
}
