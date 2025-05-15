import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  cityList: string[] = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore'];
  cityListObj: any[] = [
    { name: 'Delhi', population: 20000000 },
    { name: 'Mumbai', population: 30000000 },
    { name: 'Chennai', population: 10000000 },
    { name: 'Kolkata', population: 15000000 },
    { name: 'Bangalore', population: 12000000 },
  ];

  // create a array of objects with name id city
  cityListObj1: any[] = [
    { id: 1, name: 'Delhi', population: 20000000 },
    { id: 2, name: 'Mumbai', population: 30000000 },
    { id: 3, name: 'Chennai', population: 10000000 },
    { id: 4, name: 'Kolkata', population: 15000000 },
    { id: 5, name: 'Bangalore', population: 12000000 },
  ];
}
