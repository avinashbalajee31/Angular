import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtServiceService } from '../jwtSource/jwt-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router,private jwt :JwtServiceService) { }

  ngOnInit(): void {
  }
  loginDetail(value:any){
    console.log(value)
    
    this.http.post("http://localhost:9002/adminLogin",{email: value.email ,password: value.password})
    .subscribe(
      (res:any)=>{
        localStorage.setItem("Role","Admin")
        this.jwt.saveAuthToken(res.Token)
        this.router.navigate(['adminHome'])
    })
    
}
}
