import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username='';

  constructor(private myService: LoginserviceService, private _router: Router) { 
    this.myService.getUserName()
      .subscribe(
        data => this.username = data.toString(),
        error => this._router.navigate(['/login'])
      )
    
    console.log(this.myService)
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login'])
  }
  
  post(){
    console.log(this.myService.post);
    this.myService.post({x: 'y'})
   
  }
  

}
