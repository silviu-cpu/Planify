import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body: any){
    return this._http.post('http://localhost:3000/users/registration', body, {
      observe:'body'
    })
  }

  login(body:any){
    return this._http.post('http://localhost:3000/users/login', body, {
      observe:'body'
    })
  }
}
