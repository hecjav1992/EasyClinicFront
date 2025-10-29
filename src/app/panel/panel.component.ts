import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  standalone:false,
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  public user: string = "";
  constructor(private routes: Router) { }
    ngOnInit(): void {
      this.user = localStorage.getItem('user') ?? '';
      console.log(this.user);
    }
  
  exit() {
    this.routes.navigate(["/"])

  }

}
