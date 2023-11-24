import { Component, OnInit } from '@angular/core';
import { AutenticService } from '../autentic.service';
import { User } from '../autentic.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  usuarios:User[] = [];
  constructor(private protect:AutenticService) { }

  ngOnInit() {
    this.ListarAlumnos();
  }

  async ListarAlumnos(){
    this.usuarios = await this.protect.ListarAlumnos();
  }

}
