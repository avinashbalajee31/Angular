import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  parsedObject = JSON.parse('[' + localStorage.getItem("cartItem") + ']');

  cart: any= this.parsedObject[0]!=null?this.parsedObject : []

  totalPrice:number=parseInt(localStorage.getItem("totalPrice") || "0");

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  removeDish(dishIndex: any) {

    let allObject = JSON.parse('[' + localStorage.getItem("cartItem") + ']');//[{}]

    allObject.splice(dishIndex, 1);

    localStorage.removeItem("cartItem");

    const removedDish = this.cart.splice(dishIndex, 1);

    console.log(removedDish[0].dishPrice)

    allObject.forEach((element:any) => {
      if (localStorage.getItem("cartItem") == null) {
        localStorage.setItem("cartItem", `{"dishName":"${element.dishName}","dishPrice":"${element.dishPrice}"}`)
      } else {
        localStorage.setItem("cartItem",localStorage.getItem("cartItem")+","+`{"dishName":"${element.dishName}","dishPrice":"${element.dishPrice}"}`)
      }

  });
    

    this.totalPrice -= parseInt(removedDish[0].dishPrice)

    localStorage.setItem("totalPrice",""+this.totalPrice)



  }

  logoutUser() {
    localStorage.clear()
    this.router.navigate(['home'])
  }

}
