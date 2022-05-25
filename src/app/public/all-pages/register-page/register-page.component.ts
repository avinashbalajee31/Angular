import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Url } from '../../../url.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  data(value:any){
    // console.log(value)
    if(value.confirmPassword==value.password){
    this.http.post("http://"+Url.globalUrl+"/register",{first_name:value.fname,last_name:value.lname,email:value.email,password:value.password})
    .subscribe(
      msg=>{this.router.navigate(['addressPage'])
    })
    }
  }

  ngOnInit(): void {

  }

}
