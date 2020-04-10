import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {
form=new FormGroup({
  password:new FormGroup(
  {
    oldPassword:new FormControl('',Validators.required,PasswordValidators.passwordmatch),
    newPassword:new FormControl('',Validators.required),
    reNewPassword:new FormControl('',Validators.required)
  },
  PasswordValidators.passwordsame)
});

get password(){
  return this.form.get('password');
}

get oldPassword(){
  return this.password.get('oldPassword');
}

get newPassword()
{
  return this.password.get('newPassword');
}

get reNewPassword(){
  return this.password.get('reNewPassword');
}

}
