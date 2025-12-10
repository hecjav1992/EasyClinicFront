import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadMapService {

  private apiUrl = 'https://easydatasoftvisitback.onrender.com/api/Distance?origins=9.0701824,-79.396864&destinations=8.756950818827647,-79.86497204025315&departure_time=now&mode=driving';
  private apiUbicacion = 'https://easydatasoftvisitback.onrender.com/api/Pedidos';
  constructor(private http: HttpClient) { }
  getItems2(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUbicacion(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUbicacion);
  }
}
