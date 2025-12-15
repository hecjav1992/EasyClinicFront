import { Component,OnInit } from '@angular/core';
import { GoogleMap, MapTrafficLayer } from '@angular/google-maps';
import { LoadMapService } from '../../service/load-map.service';

interface MarkerProperties {
  position: { lat: number; lng: number; };
  title: string;
}
interface RutaResponse {
  bestdistancia: string;
}


@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private rutas: LoadMapService) { }


  path: google.maps.LatLngLiteral[] = [];
  polylineOptions: google.maps.PolylineOptions = {
    strokeColor: '#27ADF5', 
    strokeWeight: 5,
    strokeOpacity: 1
  };
  center: google.maps.LatLngLiteral = { lat: 8.537981, lng: -80.782127 };
  zoom = 8;
  markers: MarkerProperties[] = [
    { position: { lat: 8.757578, lng: -79.865468 }, title: 'Easy Data' }
  ];

  ngOnInit(): void {
    this.rutas.rutas().subscribe({
      next: (res: RutaResponse) => {
        const polylineString = res.bestdistancia; 

        const decodedPath =
          google.maps.geometry.encoding.decodePath(polylineString);

        this.path = decodedPath.map(p => ({
          lat: p.lat(),
          lng: p.lng()
        }));
        if (this.path.length > 0) {
          this.center = this.path[0];
        }
      },
      error: err => console.error('Error API', err)
    });
  }
}



  


