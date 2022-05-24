import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  constructor(private router:Router) { }
  value:any
  cat(value:any){
     console.log(value)
     localStorage.setItem("Categoryid",""+value)
    this.value=value;
    this.router.navigate(['Hotel'])
// this.http.post("http://localhost:9002/hoteldata",{categoryId: value})
    // .subscribe(
    //   (msg)=>{

    // },(error)=>{
      
    // })
    
  }
//  this.router.navigate(['Hotel'])

  ngOnInit(): void {
  }

  logoutUser() {
    localStorage.clear()
    this.router.navigate([''])
  }

  
}
