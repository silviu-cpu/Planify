import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider } from 'angularx-social-login';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username='';
  authService: any;
  httpClient: any;
  user: any;
  loggedIn: boolean | undefined;
  message='';

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
    console.log(this.myService +  '   next   ');
    console.log(this.myService.post)
  }
  

}
