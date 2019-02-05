import { LoginService } from './../servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public sesionIniciada : boolean = false;
  public sesionMenu = "";
  public rutaSesion = "home";
  public esconderLogin : String;

  constructor(private loginSer : LoginService, private router : Router) { 

    this.esconderLogin = "Login";

  }

  formLogin(miForm){

    miForm.preventDefault();

    let usuario = miForm.target.querySelector('#usuario').value;
    let password = miForm.target.querySelector('#password').value;

    let miArray;

    console.log(usuario + " y mi clave es: " + password);

    this.loginSer.getLoginData(usuario,password).subscribe((data)=>{

      miArray = data;
    
      if(miArray[0]){

        if(miArray[0].posicion == "administrador"){

          console.log(miArray[0].nombres);
          this.sesionMenu = miArray[0].nombres;
          this.sesionIniciada = true;
          this.rutaSesion = "home/admin";

          this.loginSer.contenidoLogin = miArray[0];
          this.loginSer.blockeoLogin = true;
          this.esconderLogin = "";
          this.router.navigate(['home/admin']);

        }else if(miArray[0].posicion == "profesor"){

          console.log(miArray[0].nombres);
          this.sesionMenu = miArray[0].nombres;
          this.sesionIniciada = true;
          this.rutaSesion = "home/profesor";

          this.loginSer.contenidoLogin = miArray[0];
          this.loginSer.blockeoLogin = true;
          this.esconderLogin = "";
          this.router.navigate(['home/profesor']);

        }else{

          console.log(miArray[0].nombres);
          this.sesionMenu = miArray[0].nombres;
          this.sesionIniciada = true;
          this.rutaSesion = "home/estudiante";

          this.loginSer.contenidoLogin = miArray[0];
          this.loginSer.blockeoLogin = true;
          this.esconderLogin = "";
          this.router.navigate(['home/estudiante']);

        }


      }else{
        this.loginSer.blockeoLogin = false;
        alert("no se pudo iniciar la sesion");
        this.router.navigate(['home']);
      }
      
    })
  }

  ngOnInit() {
  }

}
