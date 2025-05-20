import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent {
  constructor(private http: HttpClient) {}
  carList: any[] = [];
  carObj: any = {
    carId: "",
    brand: '',
    model: '',
    year: "",
    color: '',
    dailyRate: "",
    carImage: '',
    regNo: '',
  };


  getCarLists() {
    debugger
    this.http
      .get('/api/CarRentalApp/GetCars')
      .subscribe((res: any) => {
        if (res.result == true) {
          debugger;
          this.carList = res.data;
        } else {
          alert('Failed to get car list');
        }
      });
  }

  addCar() {
    debugger;
    this.http
      .post(
        '/api/CarRentalApp/CreateNewCar',
        this.carObj
      )
      .subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('Car Added Successfully');
        } else {
          alert('Failed to add car');
        }
      });
  }

  editCar(car: any) {
    this.carObj = car;
  }
}
