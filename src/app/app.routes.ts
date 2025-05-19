import { Routes } from '@angular/router';
import { ControlStatementComponent } from './component/control-statement/control-statement.component';
import { AdminComponent } from './component/admin/admin.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { NgIfComponent } from './component/ng-if/ng-if.component';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { NgClassComponent } from './component/ng-class/ng-class.component';
import { SignalComponent } from './component/signal/signal.component';
import { FormsComponent } from './component/forms/forms.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'dataBinding',
    component: DataBindingComponent,
  },
  {
    path: 'ngIf',
    component: NgIfComponent,
  },
  {
    path: 'ngFor',
    component: NgForComponent,
  },
  {
    path: 'ngClass',
    component: NgClassComponent,
  },

  {
    path: 'controlStatement',
    component: ControlStatementComponent,
  },
  {
    path: 'signal',
    component: SignalComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
];
