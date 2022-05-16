import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor() { }
  IsLoggedIn(){
    return !!localStorage.getItem('Token');    
  }
}
