import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { PanelComponent } from './app/panel/panel.component';
import { AppMovilComponent } from './app/app-movil/app-movil.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'App', component: AppMovilComponent },
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },

    ]

  },
];

export const routing = RouterModule.forRoot(appRoutes);
