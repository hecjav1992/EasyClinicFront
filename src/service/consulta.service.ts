import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private apiUrl = 'https://easyclinicback.onrender.com/api/Consulta';
  constructor(private http: HttpClient) { }

  consultapaciente(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
