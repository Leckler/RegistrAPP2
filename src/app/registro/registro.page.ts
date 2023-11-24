import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {
  ngOnInit() {
  }


  usuario = {
    nombre: "",
    apellidoPaterno:"",
    apellidoMaterno:"",
    jornada:"",
    rut:"",
    correo:"",
    clave:"",
    carrera:"",
  }


  constructor(private crud :CrudService) {}

  async guardar(){
    await this.crud.guardarInfo(this.usuario);
    console.log('Guardado exitoso en el storage');

    this.usuario = {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      jornada: "",
      rut: "",
      correo: "",
      clave: "",
      carrera: "",
    }
  }
}

  /*async listar(){
    const info = await this.crud.obtenerInfo();
    if (info.length > 0){
      console.log('informacion: ', info);
    }else{
      console.log('usuario inexistente');
    }
  }

  async obtenerUsuario(idUsuario: number){
    const usuario = await this.crud.obtenerInfo(idUsuario);
    if (usuario) {
      console.log('Información del usuario:', usuario);
    } else {
      console.log('Usuario inexistente');
    }
  }

  async eliminar(idUsuario:number){
    await this.crud.eliminarInfo(idUsuario);
    console.log('informacion eliminada exitosamente');
  }

  



  ngOnInit() {
  }



}
*/
