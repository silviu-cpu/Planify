import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body: any){
    return this._http.post('https://planifybackend.herokuapp.com/users/registration', body, {
      observe:'body'
    })
  }

  login(body:any){
    return this._http.post('https://planifybackend.herokuapp.com/users/login', body, {
      observe:'body'
    })
  }

  getUserName(){
    return this._http.get('https://planifybackend.herokuapp.com/users/username', {
        observe:'body',
        params: new HttpParams().append('token',localStorage.getItem('token') || '{}')
    })
  }

  post(){
    return this._http.post('https://planifybackend.herokuapp.com/users/dashboard', body, {
      observe:'body'
    })
  }

}
