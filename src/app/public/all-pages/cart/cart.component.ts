import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from '../../../url.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  paymentHandler:any = null;

  parsedObject = JSON.parse('[' + localStorage.getItem("cartItem") + ']');

  cart: any= this.parsedObject[0]!=null?this.parsedObject : []

  totalPrice:number=parseInt(localStorage.getItem("totalPrice") || "0");

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.invokeStripe();
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
    this.router.navigate([''])
  }

  order(){
    this.http.get<any>('http://'+Url.globalUrl+'/getUserData/' + localStorage.getItem('email')).subscribe(
      response => {
            const res=JSON.stringify(response)
            this.http.post("http://"+Url.globalUrl+"/orders",{useraddress:localStorage.getItem('address'), userdetails:res,orderdetail:localStorage.getItem('cartItem'),totalprice:localStorage.getItem('totalPrice')})
        .subscribe(
          (msg)=>{
             this.initializePayment(this.totalPrice)
            
        })
      }
    );




    
  }


   initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51L34Z5SEQYr4kEfJYMqExR73tXShpnkamxgkdQgIJ2vYqC2SFOy0zH31e8iRGGjQpKJ33yn08IymwLMJJKbHF19x006BqOsXgH',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        // alert('Stripe token generated!');
        pay()
      }
    });
  
    const pay=()=>{
      this.router.navigate(['order'])
    }

    paymentHandler.open({
      name: 'BITES',
      description: 'food is heaven',
      amount: amount * 100,
      currency : "inr"
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51L34Z5SEQYr4kEfJYMqExR73tXShpnkamxgkdQgIJ2vYqC2SFOy0zH31e8iRGGjQpKJ33yn08IymwLMJJKbHF19x006BqOsXgH',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
            

          }
        });
      }
      window.document.body.appendChild(script);
    }
  }
}
