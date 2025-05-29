import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userRegister } from './model/user.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  registerUser(obj: userRegister): Observable<userRegister> {
    return this.http.post<userRegister>(
      'https://api.freeprojectapi.com/api/UserApp/CreateNewUser',
      obj
    );
  }
}
