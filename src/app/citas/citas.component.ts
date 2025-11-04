import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {

  // ✅ Semana actual
  currentWeekLabel: string = 'Semana del 4 al 10 de Noviembre 2025';

  // ✅ Días columnas
  days: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'];

  // ✅ Horas filas
  hours: string[] = [
    '8:00', '9:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00'
  ];

  // ✅ Info modal
  showModal: boolean = false;
  selectedDayIndex: number | null = null;
  selectedHour: string | null = null;

  // ✅ Lista de reservas
  reservedSlots: { hour: string; dayIndex: number }[] = [];

  // ✅ Evento ejemplo
  eventTop: number = 120;
  eventLeft: number = 160;
  eventHeight: number = 80;
  eventData: any = {
    name: 'Leire',
    time: '08:30–09:30',
    desc: 'Prueba Prueba Prueba'
  };

  // ✅ Determina si un bloque está reservado
  isReserved(hour: string, dayIndex: number): boolean {
    return this.reservedSlots.some(r => r.hour === hour && r.dayIndex === dayIndex);
  }

  // ✅ Abre el Modal
  openModal(hour: string, dayIndex: number) {
    this.selectedHour = hour;
    this.selectedDayIndex = dayIndex;
    this.showModal = true;
  }

  // ✅ Guarda la reserva
  saveReservation() {
    if (this.selectedHour && this.selectedDayIndex != null) {
      this.reservedSlots.push({
        hour: this.selectedHour,
        dayIndex: this.selectedDayIndex
      });
    }
    this.cancelModal();
  }

  // ✅ Cierra modal
  cancelModal() {
    this.showModal = false;
    this.selectedHour = null;
    this.selectedDayIndex = null;
  }
}



