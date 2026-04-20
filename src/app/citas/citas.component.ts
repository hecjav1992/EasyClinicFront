import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarView, CalendarEvent, CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, CalendarModule],
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  events: CalendarEvent[] = [];

  onDayClicked(day: any) {
    console.log('Día clickeado:', day.date);
    alert("click");
  }

  onHourClicked(date: Date) {
    this.events = [
     ...this.events,
      {
        start: date,
        title: 'Nueva reserva'
      }
    ];
  }
}
