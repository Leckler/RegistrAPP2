import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticService {
  
  public logeado!: boolean;

  private local!: Storage;
  

  constructor(private storage: Storage, private route: Router) { }

  async init() {
    const storage = await this.storage.create();
    this.local = storage;

  }

  async register(username: string, password: string): Promise<Boolean> {
    if (!this.local) {
      await this.init();
    }
    const users = await this.local?.get('users') || [];
    const existe = users.find((us: User) => us.username === username && us.password === password);
    if (existe) {
      console.log("Usuario Existente")
      return true;
    } else {
      const nuevo: User = { username, password };
      users.push(nuevo);
      await this.local.set('users', users);
      console.log("Registro Exitoso")
      return false;
    }
  }

  async login(username: string, password: string): Promise<boolean> {
    if (!this.local) {
      await this.init(); 
    }
    const users: User[] = (await this.local.get('users')) || [];
    const user = users.find((us: User) => us.username === username && us.password === password);
    if (user) {
      this.logeado = true;
      return true;
    }
    this.logeado = false;
    return false;

  }

  logout() {
    this.logeado = false;
    this.route.navigate(['/home']);
  }

  async ListarAlumnos(): Promise<User[]>{
    if (this.local){
       await this.init();
    }
    return this.local.get('users')||[];
  }
}

