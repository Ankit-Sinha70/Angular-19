import { Routes } from '@angular/router';
import { ControlStatementComponent } from './component/control-statement/control-statement.component';
import { AdminComponent } from './component/admin/admin.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { NgIfComponent } from './component/ng-if/ng-if.component';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { NgClassComponent } from './component/ng-class/ng-class.component';
import { SignalComponent } from './component/signal/signal.component';
import { FormsComponent } from './component/forms/forms.component';
import { GetApiComponent } from './component/API/get-api/get-api.component';
import { PostApiComponent } from './component/API/post-api/post-api.component';
import { CustomerComponent } from './component/customer/customer.component';
import { LifecyleComponentComponent } from './component/lifecyle-component/lifecyle-component.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { NgTempNgContainerComponent } from './component/ng-temp-ng-container/ng-temp-ng-container.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'',
    component: LayoutComponent,
    children: [
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
      {
        path: 'get-api',
        component: GetApiComponent,
      },
      {
        path: 'post-api',
        component: PostApiComponent,
      },
      {
        path: 'customer',
        component: CustomerComponent,
      },
      {
        path: 'life-cycle',
        component: LifecyleComponentComponent,
      },
      {
        path: 'ng-container',
        component: NgTempNgContainerComponent,
      },
    ]
  },
  
];
