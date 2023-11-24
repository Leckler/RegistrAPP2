import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {

  constructor(private router:Router,private activatedRouter: ActivatedRoute) { }
  public user ={
    usuario:" ",

  }

  buscar() {
    if (this.user.usuario != " ") {
      this.router.navigate(['/login'])
    } else {
      console.log("Los campos no pueden estar vacios")
    }
  }
  ngOnInit() {
  }


}
