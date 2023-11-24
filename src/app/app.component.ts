import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuDocente:Boolean= false;
  menuAlumno:Boolean= false;
  menuLogin: Boolean= false;
  menuHome: Boolean= false;
  isOnDocente:Boolean= true;
  isOnAlumno:Boolean= true;
  isOnLogin:Boolean= true;
  isOnHome:Boolean= true;

  constructor(private ruta: Router) {
    ruta.events.subscribe((event)=>{
      if (event instanceof NavigationEnd){
        this.isOnDocente = event.url.includes('/docente') || event.url.includes('/lista');
        this.isOnAlumno = event.url.includes('/alumno');
        this.isOnLogin = event.url.includes('/login') || event.url.includes('/reestablecer') || event.url.includes('/rg');
        this.isOnHome = event.url.includes('/home');

        this.menuDocente = this.isOnDocente;
        this.menuAlumno = this.isOnAlumno;
        this.menuLogin = this.isOnLogin;
        this.menuHome = this.isOnHome;
      }
    });
  }

  

}
