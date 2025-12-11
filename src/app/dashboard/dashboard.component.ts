import { Component } from '@angular/core';
import { GoogleMap, MapTrafficLayer } from '@angular/google-maps';

interface MarkerProperties {
  position: { lat: number; lng: number; };
  title: string;
}

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  center: google.maps.LatLngLiteral = { lat: 8.537981, lng: -80.782127 };
  zoom = 8;
  markers: MarkerProperties[] = [
    { position: { lat: 8.757578, lng: -79.865468 }, title: 'Easy Data' }
  ];

  

}
