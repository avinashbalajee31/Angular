import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { JwtServiceService } from './jwt-service.service';
import { throwError,Observable,catchError, switchMap } from 'rxjs';
import { LogoutServiceService } from './logout-service.service';
import { Url } from '../url.model';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {
  refreshed: boolean = false;
  refreshRequest: boolean = false;
  constructor(
    private http: HttpClient,
    private tokenService: JwtServiceService,
    private regularService: LogoutServiceService,
  ) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let reqAuth;
    if (this.refreshRequest) {
      reqAuth = request.clone({
        setHeaders: {
          Authorization: "Bearer " + this.tokenService.getRefreshToken()
        }
      })
      this.refreshRequest = false;
    }
    else {
      reqAuth = request.clone({
        setHeaders: {
          Authorization: "Bearer " + this.tokenService.getAuthToken()
        }
      })
    }
    return next.handle(reqAuth).pipe(catchError((err: HttpErrorResponse) => {
      if (err && err.status == 401 && !this.refreshed) {
        this.refreshed = true;
        this.refreshRequest = true;
        return this.http.post('http://'+Url.globalUrl+'/token', "").pipe(
          switchMap((res: any) => {
            this.tokenService.saveAuthToken(res.Token)
            this.refreshed = false;
            return next.handle(request.clone({
              setHeaders: {
                Authorization: "Bearer " + this.tokenService.getAuthToken()
              }
            }));
          })
        ).pipe(catchError((err: HttpErrorResponse) => {
          if (err && err.status == 401) {
            this.regularService.logoutUser()
          }
          return throwError(() => err);
        }))
      }
      return throwError(() => err);
    }));
  }

}
