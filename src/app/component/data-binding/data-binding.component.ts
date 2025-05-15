import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
onClick($event: MouseEvent,arg1: string,arg2: string,arg3: number) {
throw new Error('Method not implemented.');
}

  firstName: string  =  'John';
  lastName: string  =  'Doe';
  age: number  =  30;
  currentDate: Date  =  new Date();
  isDisabled: boolean  =  false;


  // String Interpolation
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // Property Binding\
  get isDisabledButton(): boolean {
    return this.isDisabled;
  }
  // Event Binding  
  onButtonClick(): void {
    alert('Button clicked!');
  }
  // Two-way Data Binding
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.firstName = inputElement.value;
  }
}
