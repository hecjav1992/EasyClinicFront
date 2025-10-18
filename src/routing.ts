import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { PanelComponent } from './app/panel/panel.component'; 

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      { path: '', redirectTo: 'dash', pathMatch: 'full' },
      { path: 'dash', component: DashboardComponent },

    ]

  },
];

export const routing = RouterModule.forRoot(appRoutes);
