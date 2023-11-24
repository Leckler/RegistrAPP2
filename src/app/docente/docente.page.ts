import { Component, OnInit } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage {
  qrData: string = ''; 
  elementType: 'url' | 'canvas' | 'img' = 'canvas'; 

  constructor() {}

  generarQR() {
    this.qrData = '';
  }
}



