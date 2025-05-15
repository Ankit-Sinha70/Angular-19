import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  div1Visible: boolean = true;

  isDivShow() {
    this.div1Visible = true
  }
  isDivHide() {
    this.div1Visible = false
  }
}
