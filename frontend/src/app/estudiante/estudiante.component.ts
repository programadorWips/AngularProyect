import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { UploadimgService } from '../servicios/uploadimg.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  public datosEstudiante;
  public imgenGuadada : String; 
  private IntrodujoImagen :boolean = false;
  public miImg : File = null;


  constructor(private loginSer : LoginService, private subeImg : UploadimgService) {
    this.datosEstudiante = this.loginSer.contenidoLogin;
    this.imgenGuadada = this.datosEstudiante.foto;
   }

   ingresaImg(img){

    //console.log(img.target.files[0]);
    this.miImg = <File>img.target.files[0]; // pasar lo q este dentro input type="file"
    this.IntrodujoImagen = true;


    if (img.target.files[0]) {

      this.imgenGuadada = "../../../img/" + this.miImg.name;
      this.datosEstudiante.foto = this.imgenGuadada;
      console.log(this.datosEstudiante);
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

   uploderImg(){

    if(this.IntrodujoImagen){
      
      this.subeImg.setUploadImg(this.datosEstudiante);
    }else{
      alert("Porfavor introdusca una Imagen primero");
    }

   }

  ngOnInit() {
  }

}
