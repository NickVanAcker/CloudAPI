import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EigenAPIService {

  constructor(private http:HttpClient,private auth:AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };



  getOwnAPIData(){

    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.auth.idToken);
    console.log(this.auth.idToken)
    return this.http.get("http://localhost:10000/api/v1/leerkracht/1",{ headers: headers_object })
  }

  addLeerkracht(leerkracht : ILeerkrachtData) : Observable<ILeerkrachtData>{
    return this.http.post<ILeerkrachtData>("http://localhost:10000/api/v1/leerkracht/", leerkracht, this.httpOptions)
  }
}

export interface ILeerkrachtData {
        firstName: string;
        lastName: string;
        email: string;
        gender: string;
        ipAddress: string;
        street: string;
        postcode: number;
        number: string;
}