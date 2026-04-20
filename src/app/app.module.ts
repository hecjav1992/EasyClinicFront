import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from '../routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { AppMovilComponent } from './app-movil/app-movil.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelAppComponent } from './panel-app/panel-app.component';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { GoogleMapsModule } from '@angular/google-maps';
import { CreacionpacienteComponent } from '../app/creacionpaciente/creacionpaciente.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PanelComponent,
    AppMovilComponent,
    ConsultasComponent,
    PanelAppComponent,
    CreacionpacienteComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    GoogleMap,
    GoogleChartsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
