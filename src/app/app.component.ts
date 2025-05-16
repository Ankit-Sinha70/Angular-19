import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { NgIfComponent } from './component/ng-if/ng-if.component';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { CommonModule, NgClass } from '@angular/common';
import { NgClassComponent } from './component/ng-class/ng-class.component';
import { ControlStatementComponent } from './component/control-statement/control-statement.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19';
}

