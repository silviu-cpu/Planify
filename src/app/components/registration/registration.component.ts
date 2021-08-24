import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  myForm: FormGroup;
  successMessage = '';

  constructor(private _myservice: LoginserviceService) {
    this.myForm = new FormGroup({
      email: new FormControl(null,Validators.email),
      username: new FormControl(null,Validators.required),
      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, this.passValidator)
    });

    this.myForm.controls.password.valueChanges
    .subscribe(
      x => this.myForm?.controls.cnfpass.updateValueAndValidity()
    )
   }

  ngOnInit(): void {
  }



  passValidator( control: AbstractControl){
    if(control && (control.value !== null || control.value !== undefined)){
      const cnfpassValue = control.value;
      const passControl = control.root.get('password');
      if(passControl){
        const passValue = passControl.value;
        if(passValue !== cnfpassValue || passValue === ''){
          return {
            isError:true
          }
        }
      }
    }

    return null;
  }

  register(){
    console.log(this.myForm.value)
    
    if(this.myForm.valid){
      this._myservice.submitRegister(this.myForm.value)
      .subscribe(
        data => this.successMessage = 'Registration Success',
        error => this.successMessage = 'Error'
      );
    }
  }

  isValid(controlName: any) {
    return this.myForm.get(controlName)?.invalid && this.myForm.get(controlName)?.touched
  }

}
