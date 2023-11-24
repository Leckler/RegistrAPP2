import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {
  BarcodeScanner,
  BarcodeFormat,
  LensFacing,
} from '@capacitor-mlkit/barcode-scanning';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  user: any = {};
  state: any;
  mostrarBotonConfirmar: boolean = false;

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

}
