import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGaurdService } from '../auth-guard.service';
import { JwtServiceService } from '../jwt-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardGuard implements CanActivate {
  constructor(private jwt:AuthGaurdService , private router:Router) { }

  canActivate() {

    const Role = localStorage.getItem("Role");
    if(this.jwt.IsLoggedIn() && Role == "User") {
      return true;
    }
    else{
    this.router.navigate(['login']);
    return false;}
  } 
  
  
}

  