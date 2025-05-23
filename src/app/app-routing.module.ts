import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component'; // Make sure this path matches your admin component location

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: 'login' }
];
