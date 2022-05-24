import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from '../../../url.model';

export class Menu {
  constructor(
    public id: number,
    public hotelName: string,
    public dishes: string,
    public price:number
    
  ) {
  }
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu!: Menu[]; 
  // cart: any= this.Object[0]!=null?this.Object : [] 
  totalPrice:number=parseInt(localStorage.getItem("totalPrice") || "0");


  constructor(private httpClient:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.getMenu()
  }



  getMenu(){
    const hotelName=localStorage.getItem("name")
    console.log(hotelName)
    this.httpClient.get<any>('http://'+Url.globalUrl+'/menu/'+hotelName).subscribe(
      response => {
        console.log(response);
        this.menu = response;
      }
    );
  }
  addToCart(foodData:any,){ 

    console.log(foodData)
    alert("dish added")
    // this.message.addcart()
    // this.snackBar.open('ADDED','',{
    //   duration:2000,horizontalPosition:'center',verticalPosition:'bottom'
    // })
    if (localStorage.getItem("cartItem") == null) {
      localStorage.setItem("cartItem", `{"dishName":"${foodData.dishName}","dishPrice":"${foodData.dishPrice}"}`)
      this.totalPrice+=foodData.dishPrice
      localStorage.setItem("totalPrice", ""+this.totalPrice)
    } else {
      localStorage.setItem("cartItem",localStorage.getItem("cartItem")+","+`{"dishName":"${foodData.dishName}","dishPrice":"${foodData.dishPrice}"}`)
      this.totalPrice+=parseInt(foodData.dishPrice)
      localStorage.setItem("totalPrice",""+this.totalPrice)
    }
  }
  logoutUser() {
    localStorage.clear()
    this.route.navigate([''])
  }


}
