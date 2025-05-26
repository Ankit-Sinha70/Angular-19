import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);
  http = inject(HttpClient);

  apiLoginObj: any = {
    emailId: '',
    password: ''
  }

  loginObj: any = {
    emailId: '',
    password: ''
  }

  signupObj: any = {
    name: '',
    email: '',
    password: ''
  }

  onLogin() {
    // console.log('Login attempt with:', this.loginObj);
    // if(this.loginObj.emailId == 'admin' && this.loginObj.password == 'admin@1234') {
    //   console.log('Login successful, attempting navigation...');
    //   this.router.navigate(['/admin']).then(success => {
    //     if (!success) {
    //       console.error('Navigation failed');
    //       alert('Navigation failed - please check route configuration');
    //     }
    //   });
    // } else {
    //   alert('Invalid email or password');
    // }

    // Apicall

    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.apiLoginObj).subscribe((res: any) => {
      debugger
      localStorage.setItem("angular-19-user", res.data.userId)
      localStorage.setItem("angular-19-token", res.data.token)
      localStorage.setItem("angular19TokenData", JSON.stringify(res.data))
      this.router.navigateByUrl('admin');
    }, (err: any) => {
      alert('Invalid email or password');
    })
  }
}
