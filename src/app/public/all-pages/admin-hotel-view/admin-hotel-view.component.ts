import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Url } from '../../../url.model';

export class Hotels {
  constructor(
    public id: number,
    public hotelName: string,
    public categoryType: string
  ) {
  }
}
@Component({
  selector: 'app-admin-hotel-view',
  templateUrl: './admin-hotel-view.component.html',
  styleUrls: ['./admin-hotel-view.component.css']
})
export class AdminHotelViewComponent implements OnInit {
  hotels!:Hotels[]
  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.call()
  }
  del(no:any){
    // this.httpClient.get("http://localhost:9002/hoteldata/delhotel/"+no,{}).subscribe(
    //   (msg)=>{
    //     this.router.navigate(['adminHome'])
    // })
    this.httpClient.get<any>('http://'+Url.globalUrl+'/hoteldata/delhotel/'+no).subscribe(
    response => {
      // this.router.navigate(['adminHome'])
      // this.route();
      window.location.reload()
    }
  );
  }
  call(){
    this.httpClient.get<any>('http://'+Url.globalUrl+'/viewHotels').subscribe(
    response => {
      console.log(response);
      this.hotels = response;
      // this.route();
    }
  );
  }
  logoutUser() {
    localStorage.clear()
    this.router.navigate([''])
  }

}
