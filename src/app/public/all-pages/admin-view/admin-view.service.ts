import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from '../../../url.model';

@Injectable({
  providedIn: 'root'
})
export class AdminViewService {

  constructor(private http:HttpClient,private router:Router) { }
  del(value:any)
  {
    return this.http.post("http://"+Url.globalUrl+"/deluser/"+value,{})
    // .subscribe(
    //   (msg)=>{
    //     console.log("msg")
    //     this.router.navigate(['adminHome'])
    // })
  }
}
