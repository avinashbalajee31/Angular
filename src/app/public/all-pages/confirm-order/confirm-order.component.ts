import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

   randomIntFromInterval(min:any, max:any) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
   
  mins=this.randomIntFromInterval(30, 60)
  name=localStorage.getItem('userName')
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  
  nav(){
    this.router.navigate(['Category']);
    localStorage.removeItem("cartItem");
  }

  logoutUser() {
    localStorage.clear()
    this.router.navigate([''])
  }
}
