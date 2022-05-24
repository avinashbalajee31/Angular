import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Url } from '../../../url.model';
@Component({
  selector: 'app-admin-add-hotel',
  templateUrl: './admin-add-hotel.component.html',
  styleUrls: ['./admin-add-hotel.component.css']
})
export class AdminAddHotelComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }


  Type = [
    {typeId:1,typeName:'chinese'},
    {typeId:2,typeName:'american'},
    {typeId:3,typeName:'indian'},
    {typeId:4,typeName:'italian'},
    {typeId:5,typeName:'arabian'},
  ]

  selectedType !: number;
  type!:string



  hotelDetail(value:any){
    console.log(value)
    if(value.typeId==1){
      this.type="chinese"
    }
    else if(value.typeId==2){
      this.type="american"

    }else if(value.typeId==3){
      this.type="indian"

    }else if(value.typeId==4){
      this.type="italian"

    }else if(value.typeId==5){
      this.type="arabian"

    }
    this.http.post("http://"+Url.globalUrl+"/hoteldata/addhotel",{hotelName:value.hotelName,categoryId:this.selectedType,categoryType:this.type})
    .subscribe(
      (msg)=>{
        this.router.navigate(['adminHome'])
    },(error)=>{
            
    })
    
  }
  ngOnInit(): void {
  }

}
