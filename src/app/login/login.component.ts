import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { take } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  usuario: string = '';
  password: string = '';
  isProcessing = false;

  constructor(
    private logingService: LoginService,
    private router: Router
  ) { }

  login() {
    if (this.isProcessing) return;
    this.isProcessing = true;
    this.logingService.login(this.usuario, this.password).subscribe({
      next: res => {
        this.isProcessing = false;
        if (res.success && res.message === "admin") {
          this.router.navigate(['panel']);
        } else if (res.success && res.message === "fonoaudiologia") {
          this.router.navigate(['App']);
        }
      },
      error: (error) => {
          this.usuario = "";
          this.password = "";
          Swal.fire("Error", "Usuario o contraseña incorrectos.", "error");
          this.isProcessing = false;
       
      }
    });
  }
}

