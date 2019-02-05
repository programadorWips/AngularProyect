import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { UploadimgService } from '../servicios/uploadimg.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  public datosAdmin;
  public imgenGuadada : String; 
  private IntrodujoImagen :boolean = false;
  public miImg : File = null;


  constructor(private loginSer : LoginService, private subeImg : UploadimgService) {
    this.datosAdmin = this.loginSer.contenidoLogin;
    this.imgenGuadada =this.datosAdmin.foto;
   }

   ingresaImgA(img){
   
    this.miImg = <File>img.target.files[0]; // pasar lo q este dentro input type="file"
    this.IntrodujoImagen = true;


    if (img.target.files[0]) {

      this.imgenGuadada = "../../../img/" + this.miImg.name;
      this.datosAdmin.foto = this.imgenGuadada;
      console.log(this.datosAdmin);
      /*
      let reader = new FileReader();
      reader.onload = (event: any) => {
          this.imgenGuadada = event.target.result;
          //console.log(event.target.result);
          console.log(this.imgenGuadada);

          this.datosEstudiante.foto = this.imgenGuadada;
      }
      reader.readAsDataURL(this.miImg);
      */
    }   

   }

   uploderImgA(){

    if(this.IntrodujoImagen){
      this.subeImg.setUploadImg(this.datosAdmin);
    }else{
      alert("Porfavor introdusca una Imagen primero");
    }

   }

  ngOnInit() {
  }

}
