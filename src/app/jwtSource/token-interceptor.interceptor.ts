import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { JwtServiceService } from './jwt-service.service';
import { throwError,Observable,catchError } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private jwt:JwtServiceService,
    private http:HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let reqAuth = request.clone({
      setHeaders: {
        Authorization: "Bearer "+this.jwt.getAuthToken()
      }
    })
    return next.handle(reqAuth)    
  }

}
