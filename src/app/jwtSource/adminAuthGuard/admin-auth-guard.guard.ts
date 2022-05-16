import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGaurdService } from '../auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardGuard implements CanActivate {
  constructor(private jwt:AuthGaurdService , private router:Router) { }

  canActivate() {

    const Role = localStorage.getItem("Role");
    if(this.jwt.IsLoggedIn() && Role == "Admin") {
      return true;
    }
    else{
    this.router.navigate(['adminLogin']);
    return false;}
  } 
}
