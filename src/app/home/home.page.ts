import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AutenticService } from '../autentic.service';
import {
  BarcodeScanner,
  BarcodeFormat,
  LensFacing,
} from '@capacitor-mlkit/barcode-scanning';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any = {};
  state: any;
  mostrarBotonConfirmar: boolean = false;
  

  constructor(private activatedRouter: ActivatedRoute, private router: Router,private storage:Storage,private protect:AutenticService){
    this.activatedRouter.queryParams.subscribe((params) => {
      this.state = this.router.getCurrentNavigation()?.extras.state;
      this.user = this.state.user;
    });
    
  }


  async ngOnInit() {
    await this.storage.create();
  }

  async escanearCodigoQR() {
    try {
      this.instalarServiciosEscaneo();
      const result = await BarcodeScanner.scan();
      console.log('Código escaneado:', result);
      this.mostrarBotonConfirmar = true;
    } catch (error) {
      console.error('Error al escanear código QR:', error);
    }
  }

  async instalarServiciosEscaneo() {
    try {
      BarcodeScanner.installGoogleBarcodeScannerModule();
      console.log('Servicios de escaneo instalados correctamente');
    } catch (error) {
      console.error('Error al instalar servicios de escaneo:', error);
      throw error; 
    }
  }

  confirmarAsistencia() {
    console.log('Asistencia confirmada');
    alert("presente")
  }
  


}
