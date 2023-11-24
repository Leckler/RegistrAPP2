import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticService } from './autentic.service';


@Injectable({
  providedIn: 'root'
})

export class GuardianGuard implements CanActivate {
  constructor(private rout: Router, private protect: AutenticService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.protect.logeado) {
      return true;
    } else {
      this.rout.navigate(['/login']);
      return false;
    }
  }

  
  
}
