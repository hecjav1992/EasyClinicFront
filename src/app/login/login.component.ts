import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';
  constructor(private logingService: LoginService,
    private router: Router,) { }

  login() {
    //this.ejecutarTarea();
    this.logingService.login(this.usuario, this.password).subscribe({
      next: (res) => {
        if (res.success && res.message == "admin") {
          this.router.navigate(['panel']);
        }
        else if (res.success && res.message == "medico") {
          //localStorage.setItem('user', res.message);
          this.router.navigate(['App']);
        }
        else {
          console.error('Error de login');
        }
      }
    });

  }

}
