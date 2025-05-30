import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Output() buttonClick = new EventEmitter<Event>();

  onClick(event: Event) {
    this.buttonClick.emit(event);
  }
}
