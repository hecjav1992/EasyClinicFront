import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarView, CalendarEvent, CalendarModule } from 'angular-calendar';
import Swal from 'sweetalert2';
import { CitasService } from '../../service/citas.service';
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, CalendarModule],
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  constructor(private citas: CitasService) { }
  
  locale: string = 'es';
  titulo: any;
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  events: CalendarEvent[] = [];

  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }


  async onHourClicked(date: Date) {
    this.titulo = await this.valor();
    this.events = [
     ...this.events,
      {
        start: date,
        title: this.titulo,
        color: {
          primary: "white",
          secondary:"green"
        }        
      }
    ];
    this.citas.reserver(this.titulo).subscribe({
      next: res => {
        console.log(res);
      },
    });
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
      confirmButtonText: "Confirmar",
      showCancelButton: true,
    });
    if (result.isConfirmed) {
      return result.value;
    }
  }
}
