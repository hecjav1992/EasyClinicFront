import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private apiUrl = 'https://easyclinicback.onrender.com/api/Agenda/agendar';
  constructor(private http: HttpClient) { }
  reserver(): Observable<any> {
    return this.http.post<any>(this.apiUrl, {

    });
  }


}
