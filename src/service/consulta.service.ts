import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private apiUrl = 'https://easyclinicback.onrender.com/api/Consulta';
  constructor(private http: HttpClient) { }

  consultapaciente(minId:any): Observable<any> {
    let params = new HttpParams();

    if (minId !== undefined && minId !== null) {
      params = params.set('minId', minId.toString());
    }

    return this.http.get<any>(this.apiUrl, { params });
  }

}
