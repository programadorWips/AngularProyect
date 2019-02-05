import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadimgService {

  constructor(private http : HttpClient) { }

  setUploadImg(contenidoPerfil : any){
    /*console.log("enViar Imagen: " + url + "\n fin de la informacion \n\n");*/
    console.log(contenidoPerfil);

    return this.http.put("http://localhost:3000/upload",{contenidoPerfil}).subscribe((data)=>{
      console.log(data);
    });

  }
}
