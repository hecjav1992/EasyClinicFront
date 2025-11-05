import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private apiUrl = 'https://easyclinicback.onrender.com/api/Consulta';
  private apiUrlhistorial = 'https://easyclinicback.onrender.com/api/Consulta/historialpaciente';
  constructor(private http: HttpClient) { }

  consultapaciente(minId: any): Observable<any> {
    let params = new HttpParams();

    if (minId !== undefined && minId !== null) {
      params = params.set('minId', minId.toString());
    }
    return this.http.get<any>(this.apiUrl, { params });
  }

  buscardata(minId: any): Observable<any> {
    let params = new HttpParams().set('minId', minId);
    return this.http.get<any>(this.apiUrl, { params });
  }

  historialpaciente(minId: any): Observable<any> {
    let params = new HttpParams().set('minId', minId);
    return this.http.get<any>(this.apiUrlhistorial, { params });
  }




}
