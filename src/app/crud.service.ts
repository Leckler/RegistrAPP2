import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})



export class CrudService {

  ultimoId = 0;


  constructor(private storage:Storage) { 
    //crear el storage para usarlo
    this.init();

  }

  //Esto crea el storage
  async init(){
    await this.storage.create();
  }

  async guardarInfo(usuario: any) {
    const usuarios = await this.obtenerTodosUsuarios();
    const nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1; // Obtener el último ID o empezar desde 1 si no hay usuarios
    usuario.id = nuevoId; // Asignar el nuevo ID al usuario
    usuarios.push(usuario); // Agregar el usuario al arreglo existente
    await this.storage.set('usuarios', usuarios);
  }

  
  async obtenerTodosUsuarios() {
    return (await this.storage.get('usuarios')) || [];
  }
  

  

  

  async obtenerInfo(idUsuario:number){
    return await this.storage.get(`usuario_${idUsuario}`);
  }

  async eliminarInfo(idUsuario:number){
    await this.storage.remove('usuario_${idUsuario');
  }
  


}
