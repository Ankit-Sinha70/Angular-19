import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CustomersService } from '../../service/customers.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customerList: any;
  private custService = inject(CustomersService);

  constructor() {
    this.getCustomer();
  }
    
  // getCustomer(){
  //   this.http.get('https://dummyjson.com/users').subscribe((data:any)=>{
  //     this.customerList = data.users;
  //   })
  // }

  
  // using service method
  getCustomer() {
    this.custService.loadCustomers().subscribe((data: any) => {
      this.customerList = data.users;
    });
  }
}
