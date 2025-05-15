import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  imports: [AdminComponent, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19';
}
