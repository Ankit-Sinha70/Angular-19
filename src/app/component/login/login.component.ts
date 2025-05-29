import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { userRegister } from '../../model/user.module';
import { LoginServiceService } from '../../login-service.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  http = inject(HttpClient);
  userService = inject(LoginServiceService);

  apiLoginObj: any = {
    emailId: '',
    password: '',
  };

  // loginObj: any = {
  //   userName: '',
  //   password: '',
  // };

  signupObj: any = {
    emailId: '',
    fullName: '',
    password: '',
  };

  registerObj: userRegister = new userRegister();

  isSignUp = false;

  onLogin() {
    // console.log('Login attempt with:', this.loginObj);
    // if(this.loginObj.userName == 'admin' && this.loginObj.password == 'admin@1234') {
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
    debugger
    this.http.post("https://api.freeprojectapi.com/api/UserApp/login", this.apiLoginObj).subscribe((res: any) => {
      localStorage.setItem("angular-19-user", res.data.userId)
      localStorage.setItem("angular-19-token", res.data.token)
      localStorage.setItem("angular19TokenData", JSON.stringify(res.data))
      this.router.navigateByUrl("/admin");
    }, (err: any) => {
      alert('Invalid email or password');
    })
  }
  toggleForm() {
    this.isSignUp = !this.isSignUp;
    const container = document.getElementById('container');
    if (container) {
      if (this.isSignUp) {
        container.classList.add('right-panel-active');
      } else {
        container.classList.remove('right-panel-active');
      }
    }
  }

  onRegisterUser(obj: userRegister) {
    debugger
    return this.userService.registerUser(this.registerObj).subscribe(
      (res: userRegister) => {
        alert('User Registration Successful');
        this.registerObj = new userRegister();
        this.toggleForm();    
      },
      (err: any) => {
        alert('User Registration Failed');
      }
    );
  }
}
