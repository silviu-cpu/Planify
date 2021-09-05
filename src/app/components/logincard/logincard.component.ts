import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.scss']
})
export class LogincardComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _myservice: LoginserviceService, private _router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  isValid(controlName: any) {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched
  }

  login(){
    
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      this._myservice.login(this.loginForm.value)
      .subscribe(
        data => {
          console.log(data);
          localStorage.setItem('token',data.toString())
          this._router.navigate(['/dashboard'])
        },
        error => {}
      )
    }
  }
}
