import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  standalone:false,
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  constructor(private routes: Router) { }
  exit() {
    this.routes.navigate(["/"])

  }

}
