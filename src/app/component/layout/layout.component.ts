import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CustomersService } from '../../service/customers.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router)
  custService = inject(CustomersService)
  private http = inject(HttpClient)

  constructor() {
    debugger
    this.custService.tokenExpired$.subscribe((res:any) => {
      if (res) {
        const loggedData = localStorage.getItem("angular19TokenData");
        if(loggedData) {
          const loggedUser = JSON.parse(loggedData)
          const obj = {
              "emailId": loggedUser.emailId,
              "token": loggedUser.token,
              "refreshToken": loggedUser.refreshToken
          }
          this.http.post("https:projectapi.gerasim.in/api/userApp/refresh", obj).subscribe((res:any) => {
            localStorage.setItem("angular-19-user", res.data.userId)
            localStorage.setItem("angular-19-token", res.data.token)
            localStorage.setItem("angular19TokenData", JSON.stringify(res.data))
          })
        }
      }
    })
  }

}
