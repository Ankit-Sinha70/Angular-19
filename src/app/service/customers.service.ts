import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private http = inject(HttpClient);

  tokenExpired$:Subject<boolean> = new Subject<boolean>();

  loadCustomers() {
    return this.http.get("https://dummyjson.com/users")
  }
}
