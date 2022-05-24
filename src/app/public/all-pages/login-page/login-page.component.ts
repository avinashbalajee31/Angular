import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtServiceService } from '../../../jwtSource/jwt-service.service';
import { Url } from '../../../url.model';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private jwt:JwtServiceService) { }
  is!:boolean
  loginDetail(value:any){
    
    this.http.post("http://"+Url.globalUrl+"/login",{email: value.email ,password: value.password})
    .subscribe(
      (res:any)=>{
        this.http.get<any>('http://'+Url.globalUrl+'/getUserData/' + value.email).subscribe(
          response => {
            localStorage.setItem("userId",""+response.id)
            localStorage.setItem("userName",""+response.first_name)
            localStorage.setItem("email",""+response.email)
            this.http.get<any>('http://'+Url.globalUrl+'/findAddress/'+ localStorage.getItem('userId')).subscribe(
                res => {
                  console.log(res)
                  localStorage.setItem("doorNo", "" + res.door_number)
                  localStorage.setItem("street", "" + res.street_name)
                  localStorage.setItem("area", "" + res.area)
                  localStorage.setItem("city", "" + res.city)   
                  localStorage.setItem("pincode", "" + res.pincode)
                  localStorage.setItem("phone_num", "" + res.phone_num)
                  localStorage.setItem("address",""+res.door_number+","+res.street_name+","+res.area+","+res.city+","+res.pincode+", Ph.No"+res.phone_num)
                }
              );
          }
        );
        localStorage.setItem("Role","User")
        // this.message.login()
        this.jwt.saveAuthToken(res.Token)
        this.jwt.saveRefreshToken(res.refreshToken)
        this.router.navigate(['Category'])
    },(err)=>{
      alert('user not found')
      this.router.navigate(['login'])
  })
    
  }

  ngOnInit(): void {
  }

}
