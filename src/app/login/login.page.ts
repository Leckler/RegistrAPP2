import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';
import { CrudService } from '../crud.service';
import { AutenticService} from '../autentic.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  constructor(private router:Router,private activatedRouter: ActivatedRoute, private dataService: DataService,
    private storage:Storage, private crud: CrudService, private protect: AutenticService) { }

  user ={
    usuario:" ",
    password:" ",

  }

  async ngOnInit() {

    await this.storage.create()

  }

  

  logear() {
    this.protect.login(this.user.usuario, this.user.password).then(() => {
      if (this.protect.logeado) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user }
        }
        this.router.navigate(['/home'], navigationExtras);
      } else {
        
      }
    });
  }

  


}
