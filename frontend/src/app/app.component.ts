import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private http : HttpClient){

  }

  formRegister(e){

    e.preventDefault();

    let error = [];

    let user : string = e.target.querySelector('#nombre').value;
    let password : string = e.target.querySelector('#password').value;
    let password2 : string = e.target.querySelector('#password2').value;

    console.log(user, " ", password, " ", password2);

    this.http.post('http://localhost:3000',{user,password}).subscribe((data)=>{
      console.log('se envio correctamente', data);
    })
    
  }
}
