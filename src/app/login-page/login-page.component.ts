import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtServiceService } from '../jwtSource/jwt-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private jwt:JwtServiceService) { }
  is!:boolean
  loginDetail(value:any){
    
    this.http.post("http://localhost:9002/login",{email: value.email ,password: value.password})
    .subscribe(
      (res:any)=>{
        localStorage.setItem("Role","User")
        this.jwt.saveAuthToken(res.Token)
        this.router.navigate(['Category'])
    },(err:any)=>{
      localStorage.setItem("Role","User")
      this.jwt.saveAuthToken(err.Token)
      this.router.navigate(['Category'])
  })
    
  }

  ngOnInit(): void {
  }

}