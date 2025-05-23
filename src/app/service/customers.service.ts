import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private http = inject(HttpClient);

  loadCustomers() {
    return this.http.get("https://dummyjson.com/users")
  }
}
