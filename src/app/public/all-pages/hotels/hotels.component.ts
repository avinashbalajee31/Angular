import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryPageComponent } from '../category-page/category-page.component';
import { Router } from '@angular/router';
import { Url } from '../../../url.model';

export class User {
  constructor(
    public id: number,
    public hotelName: string,
    public categoryType: string,
    public image:string
    
  ) {
  }
}

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
    user!: User[]; 
   
  constructor(private httpClient:HttpClient ,private router:Router) { }

  ngOnInit(){
     this.getHotel()
}
getHotel(){
  const value =localStorage.getItem("Categoryid")
  this.httpClient.get<any>('http://'+Url.globalUrl+'/hoteldata/'+value).subscribe(
    response => {
      console.log(response);
      this.user = response;
      // this.route();
    }
  );
}
outlet(value:any){
  localStorage.setItem("name",""+value)
   this.router.navigate(['menu'])
}
// route(){
//   this.router.navigate(['menu'])
// }

logoutUser() {
  localStorage.clear()
  this.router.navigate([''])
}

}

