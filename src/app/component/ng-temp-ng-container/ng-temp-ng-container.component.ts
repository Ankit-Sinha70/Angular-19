import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [NgIf],
  templateUrl: './ng-temp-ng-container.component.html',
  styleUrl: './ng-temp-ng-container.component.css'
})
export class NgTempNgContainerComponent {
  isLoader: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isLoader = false;
    }, 3000);
  }
}
