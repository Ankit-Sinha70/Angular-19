import { UpperCasePipe, LowerCasePipe, DatePipe, JsonPipe, CurrencyPipe, PercentPipe, SlicePipe, AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-lifecyle-component',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, JsonPipe, CurrencyPipe, PercentPipe, SlicePipe, AsyncPipe],
  templateUrl: './lifecyle-component.component.html',
  styleUrl: './lifecyle-component.component.css',
})
export class LifecyleComponentComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked
{
  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  message = 'Hello, World!';
  date = new Date();
  amount = 1000;
  percentage = 0.5;
  object = { name: 'John', age: 20 };
  array = [1, 2, 3, 4, 5];
  promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve('Promise resolved'), 2000);
  });
  currency = 'USD';
  percent = 0.5;

  toggle() {
    this.message = this.message === 'Hello, World!' ? 'Goodbye, World!' : 'Hello, World!';
  }

  toggleCurrency() {
    this.currency = this.currency === 'USD' ? 'EUR' : 'USD';
  }

  togglePromise() {
    this.promise.then((result) => {
      this.message = result;
    });
  }

  togglePercent() {
    this.percent = this.percent === 0.5 ? 0.75 : 0.5;
  }

  toggleSlice() {
    this.array = this.array.slice(0, 3);
  }

}
