import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-panel-app',
  templateUrl: './panel-app.component.html',
  styleUrls: ['./panel-app.component.css']
})
export class PanelAppComponent {

  constructor(private roter: Router) { }

  newPaciente() {
    this.roter.navigate(["NuevoPaciente"]);
  }

}
