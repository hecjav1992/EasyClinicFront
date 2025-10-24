import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { PanelComponent } from './app/panel/panel.component';
import { AppMovilComponent } from './app/app-movil/app-movil.component';
import { PanelAppComponent } from './app/panel-app/panel-app.component';
import { ConsultasComponent } from './app/consultas/consultas.component';
import { FonoaudiologiaConsultaComponent } from './app/fonoaudiologia-consulta/fonoaudiologia-consulta.component';
import { PacientesComponent } from './app/pacientes/pacientes.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'App', component: PanelAppComponent },
  { path: 'NuevoPaciente', component: AppMovilComponent },
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pacientes', component: PacientesComponent },
      { path: 'fonoaudiologia', component: FonoaudiologiaConsultaComponent },
      { path: 'consultas', component: ConsultasComponent },
    ]

  },
  { path: '**', component: LoginComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
