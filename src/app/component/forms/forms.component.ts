import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  userObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city:'',
    state:'',
    zipCode:'',
    isTermsAgree: false,
  }

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl(this.userObj.firstName),
    lastName: new FormControl(this.userObj.lastName),
    userName: new FormControl(this.userObj.userName),
    city: new FormControl(this.userObj.city),
    state: new FormControl(this.userObj.state),
    zipCode: new FormControl(this.userObj.zipCode),
    isTermsAgree: new FormControl(this.userObj.isTermsAgree),
  });

  onSave() {
    debugger
    const formValue = this.userObj;
  }

  onFormSubmit() {
    debugger
    const formValue = this.userForm.value;
  }

}
