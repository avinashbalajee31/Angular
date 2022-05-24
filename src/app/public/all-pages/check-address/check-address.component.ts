import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from '../../../url.model';
// import { Url } from '../url.model';
@Component({
  selector: 'app-check-address',
  templateUrl: './check-address.component.html',
  styleUrls: ['./check-address.component.css']
})
export class CheckAddressComponent implements OnInit {

  // doorNo=localStorage.getItem('doorNo');
  // street=localStorage.getItem('street');
  // area=localStorage.getItem('area');
  // city=localStorage.getItem('city');
  // pincode=localStorage.getItem('pincode');
  // phno=localStorage.getItem('phone_num');

  doorNo!:number;
  street!:any;
  area!:any;
  city!:string;
  pincode!:number;
  phno!:number;



  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.oncall()

  }



  oncall(){
    
    this.http.get<any>('http://'+Url.globalUrl+'/findAddress/'+ localStorage.getItem('userId')).subscribe(
                res => {
                  console.log("working");
                  console.log(res)
                  // localStorage.setItem("doorNo", "" + res.door_number)
                  // localStorage.setItem("street", "" + res.street_name)
                  // localStorage.setItem("area", "" + res.area)
                  // localStorage.setItem("city", "" + res.city)   
                  // localStorage.setItem("pincode", "" + res.pincode)
                  // localStorage.setItem("phone_num", "" + res.phone_num)
                  this.doorNo=res.door_number;
                  this.street=res.street_name;
                  this.area=res.area;
                  this.city=res.city;
                  this.pincode=res.pincode;
                  this.phno=res.phone_num;
                }
              );
  }


  redirect(){
    this.router.navigate(['Cart'])
  }
                  // localStorage.setItem("doorNo", "" + response.door_number)
                  // localStorage.setItem("street", "" + response.street_name)
                  // localStorage.setItem("area", "" + response.area)
                  // localStorage.setItem("district", "" + response.city)   
                  // localStorage.setItem("pincode", "" + response.pincode)
                  // localStorage.setItem("phone_num", "" + response.phone_num)
}
