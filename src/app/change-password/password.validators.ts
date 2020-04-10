import { ValidationErrors, AbstractControl } from '@angular/forms';

export class PasswordValidators{

  static passwordmatch(control: AbstractControl) : Promise<ValidationErrors|null>
  {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(!(control.value==="abcd"))
          resolve({passwordmatch:true});
        else
          resolve(null);
      },2000);
    });
  }

  static passwordsame(control: AbstractControl):ValidationErrors|null{
    let pass=control.get('newPassword').value;
    let confirmPass=control.get('reNewPassword').value;
    console.log(control);
    if(pass!==confirmPass)
      return {passwordsame:true};
    else
      return null;
  }
}
