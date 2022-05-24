import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  constructor() { }
  getAuthToken() {
    return localStorage.getItem("Token")
  }

  saveAuthToken(Token:any) {
    localStorage.setItem("Token",Token)
  }


  getRefreshToken() {
    return localStorage.getItem("Refresh")
  }

  saveRefreshToken(refreshToken:any) {
    localStorage.setItem("Refresh",refreshToken)
  }
}
