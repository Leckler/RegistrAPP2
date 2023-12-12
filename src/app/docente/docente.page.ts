import { Component, OnInit } from '@angular/core';
import { AutenticService } from '../autentic.service';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage {
  qrData: string = ''; 
  elementType: 'url' | 'canvas' | 'img' = 'canvas'; 

  constructor(private autenticService: AutenticService) {}

  generarQR() {
    const usuario = this.autenticService.register;
    if (usuario) {
      this.qrData = `Docente: ${usuario}\nFecha: ${new Date().toLocaleDateString()}`;
    } else {
      console.error('Nombre de usuario no disponible');
    }
  }
}



