import { Component, OnInit } from '@angular/core';
import { AutenticService } from '../autentic.service';

@Component({
  selector: 'app-rg',
  templateUrl: './rg.page.html',
  styleUrls: ['./rg.page.scss'],
})
export class RGPage implements OnInit {

  user = {
    usuario: "",
    password: ""
  }


  constructor(private protect: AutenticService) { }

  ngOnInit() {
  }

  confirm() {
    this.protect.register(this.user.usuario, this.user.password).then((res) => {
      if (res) {
        console.log('Usuario Existe')
      } else {
        this.user.usuario, 'confirm';
        console.log('Registro Completado');
        
      }
    })
  }

}
