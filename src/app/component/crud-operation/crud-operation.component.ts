import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  id?: number | undefined;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-crud-operation',
  imports:[FormsModule,CommonModule, FormsModule],
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent implements OnInit {
  users: any[] = [];
  userList: User[] = [];
  user: User = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };
  isEditing = false;

  ngOnInit(): void {
    const localUser = localStorage.getItem("angular19User");
    if (localUser != null) {
      this.userList = JSON.parse(localUser)
    }
  }



  onSubmit() {
    if (this.isEditing) {
      // Update existing user
      const index = this.userList.findIndex(u => u.id === this.user.id);
      if (index !== -1) {
        this.userList[index] = { ...this.user };
      }
    } else {
      // Add new user
      this.user.id = this.userList.length + 1;
      this.userList.push({ ...this.user });
    }
    localStorage.setItem("angular19User",JSON.stringify(this.userList))
    alert("User added successfully")
    this.resetForm();
  }

  onEdit(user: User) {
    this.user = { ...user };
    this.isEditing = true;
  }

  onDelete(user: User) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userList = this.userList.filter(u => u.id !== user.id);
      // also remove from localstorage
      const storedUsers = localStorage.getItem('angular19User');
      if (storedUsers) {
        const parsedUsers: User[] = JSON.parse(storedUsers);
        const updatedUsers = parsedUsers.filter(u => u.id !== user.id);
        localStorage.setItem('angular19User', JSON.stringify(updatedUsers));
        alert("User deleted successfully.")
      }


    }
  }

  resetForm() {
    this.user = {
      name: '',
      email: '',
      phone: '',
      address: ''
    };
    this.isEditing = false;
  }
}
