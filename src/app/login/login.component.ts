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
    console.log("enviando");
    this.logingService.login(this.usuario, this.password).subscribe({
      next: (res) => {
        this.router.navigate(['panel']);
      }
    });

  }

}
