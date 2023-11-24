import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
  animations: [
      trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(100%)' })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
    ]),
  ],
  
})
export class PruebasPage implements OnInit {
  darkModeEnabled = false;

  toggleDarkMode(event: MatSlideToggleChange) {
    this.darkModeEnabled = event.checked;


  }


  ngOnInit() {
  }

}
