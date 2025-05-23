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
  empList: any[] = [];
  empObj: any = {
    employeeId: '',
    employeeName: '',
    emailId: '',
    contactNo: '',
    role: '',
    password: '',
    gender: '',
    deptId: '',
  };

  getEmpLists() {
    this.http
      .get(
        'https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees'
      )
      .subscribe((res: any) => {
        if (res.result) {
          this.empList = res.data;
        } else {
          alert('Failed to get employee list');
        }
      });
  }
  // ngOnInit() {
  //   this.getEmpLists();
  // }

  addEmployee() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee',
        this.empObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Employee Added Successfully');
        } else {
          alert('Failed to add employee');
        }
      });
  }

  editEmployee(emp: any) {
    this.empObj = emp;
    this.getEmpLists();
  }

  deleteEmployee(empId: string) {
    const isDelete = confirm('Are you sure you want to delete this employee?');
    if (!isDelete) return;
    this.http
      .delete(
        `https://freeapi.miniprojectideas.com/api/EmployeeLeave/DeleteEmployee/${empId}`
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Employee Deleted Successfully');
        } else {
          alert('Failed to delete employee');
        }
      });
  }
}
