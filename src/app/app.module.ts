import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { TokenInterceptorInterceptor } from './jwtSource/token-interceptor.interceptor';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AddressPageComponent } from './address-page/address-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddHotelComponent } from './admin-add-hotel/admin-add-hotel.component';
import { AdminHotelViewComponent } from './admin-hotel-view/admin-hotel-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AddressPageComponent,
    CategoryPageComponent,
    HotelsComponent,
    MenuComponent,
    CartComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminAddHotelComponent,
    AdminHotelViewComponent,
    AdminViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorInterceptor,
    multi:true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
