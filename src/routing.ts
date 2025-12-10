import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { PanelComponent } from './app/panel/panel.component';
import { AppMovilComponent } from './app/app-movil/app-movil.component';
import { PanelAppComponent } from './app/panel-app/panel-app.component';
import { ConsultasComponent } from './app/consultas/consultas.component';
import { FonoaudiologiaConsultaComponent } from './app/fonoaudiologia-consulta/fonoaudiologia-consulta.component';
import { PacientesComponent } from './app/pacientes/pacientes.component';
import { PsicologiaComponent } from './app/psicologia/psicologia.component';
import { CreacionpacienteComponent } from './app/creacionpaciente/creacionpaciente.component';
import { ProveedoresComponent } from './app/proveedores/proveedores.component';
import { InventarioComponent } from './app/inventario/inventario.component';
import { CitasComponent } from './app/citas/citas.component';
import { AnaliticaBIComponent } from './app/analitica-bi/analitica-bi.component';
import { RestablecerContrasenaComponent } from './app/restablecer-contrasena/restablecer-contrasena.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'App', component: PanelAppComponent },
  { path: 'Restablecer', component: RestablecerContrasenaComponent },
  { path: 'NuevoPaciente', component: AppMovilComponent },
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pacientes', component: PacientesComponent },
      { path: 'fonoaudiologia', component: FonoaudiologiaConsultaComponent },
      { path: 'Atencion', component: ConsultasComponent },
      { path: 'psicologia', component: PsicologiaComponent },
      { path: 'CreacionPaciente', component: CreacionpacienteComponent },
      { path: 'Inventario', component: InventarioComponent },
      { path: 'proovedor', component: ProveedoresComponent },
      { path: 'Agendas', component: CitasComponent },
      { path: 'AnaliticaBI', component: AnaliticaBIComponent },
    ]

  },
  { path: '**', component: LoginComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
