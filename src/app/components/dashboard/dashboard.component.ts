import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  postForm: FormGroup;

  username='';
  message='';
  published= 'false';

  constructor(private myService: LoginserviceService, private _router: Router) { 
    this.myService.getUserName()
      .subscribe(
        data => this.username = data.toString(),
        error => this._router.navigate(['/login'])
      )
    
     this.postForm = new FormGroup({
      message: new FormControl(null, Validators.required),
      published: new FormControl(this.published),
      timestamp: new FormControl(null,Validators.required)
    });
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login'])
  }
  
  post(){
    
    console.log(this.postForm.value)
    if(this.postForm.valid){
      this.myService.post(this.postForm.value)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {}
      )
    }
  
  }

}
