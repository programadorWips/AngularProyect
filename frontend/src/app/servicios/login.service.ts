import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public contenidoLogin : any;

  public blockeoLogin : boolean = false;
  public url : string = "http://localhost:3000";

  constructor(private http : HttpClient) { }

  getLoginData(usuario, password){
    return this.http.post(this.url, {usuario, password});
  }
}
