import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminViewService {

  constructor(private http:HttpClient,private router:Router) { }
  del(value:any)
  {
    return this.http.post("http://localhost:9002/deluser/"+value,{})
    // .subscribe(
    //   (msg)=>{
    //     console.log("msg")
    //     this.router.navigate(['adminHome'])
    // })
  }
}
