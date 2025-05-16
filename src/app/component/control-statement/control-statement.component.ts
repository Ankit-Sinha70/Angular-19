import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css',
})
export class ControlStatementComponent {
  isDivVisible: boolean = false;
  isChecked: boolean = false;

  hideShowDiv1(isShow: boolean) {
    this.isDivVisible = isShow;
  }
}
