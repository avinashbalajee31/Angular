import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminViewService } from './admin-view.service';
import { Url } from '../../../url.model';
export class User {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email:string
  ) {
  }
}

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  user!:User[]
  constructor(private httpClient:HttpClient,private router:Router,private service:AdminViewService) { }


  ngOnInit(): void {
    this.call()
  }
  del(value:any){
    this.service.del(value).subscribe(
      (res:any) =>{
       
        // this.router.navigate(['adminHome'])
        window.location.reload()
      }
    )
    
  }
  call(){
    this.httpClient.get<any>('http://'+Url.globalUrl+'/viewUsers').subscribe(
    response => {
      console.log(response);
      this.user = response;
    }
  );
  }
  logoutUser() {
    localStorage.clear()
    this.router.navigate([''])
  }


}
