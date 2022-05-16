import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  addDetail(value:any){
    console.log(value)
    
    this.http.post("http://localhost:9002/addressDetail",{door_number:value.doorno, street_name:value.street, 
    area:value.area, city:value.city ,pincode:value.pincode ,phone_num:value.phoneNumber})
    .subscribe(
      (msg)=>{ this.router.navigate(['login'])
    },(error)=>{
      this.router.navigate(['login'])
    })
    
  }


  ngOnInit(): void {
  }

}
