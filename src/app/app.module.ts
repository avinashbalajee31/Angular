import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './public/all-pages/home-page/home-page.component';
import { LoginPageComponent } from './public/all-pages/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { TokenInterceptorInterceptor } from './jwtSource/token-interceptor.interceptor';
import { RegisterPageComponent } from './public/all-pages/register-page/register-page.component';
import { AddressPageComponent } from './public/all-pages/address-page/address-page.component';
import { CategoryPageComponent } from './public/all-pages/category-page/category-page.component';
import { HotelsComponent } from './public/all-pages/hotels/hotels.component';
import { MenuComponent } from './public/all-pages/menu/menu.component';
import { CartComponent } from './public/all-pages/cart/cart.component';
import { AdminLoginComponent } from './public/all-pages/admin-login/admin-login.component';
import { AdminHomeComponent } from './public/all-pages/admin-home/admin-home.component';
import { AdminAddHotelComponent } from './public/all-pages/admin-add-hotel/admin-add-hotel.component';
import { AdminHotelViewComponent } from './public/all-pages/admin-hotel-view/admin-hotel-view.component';
import { AdminViewComponent } from './public/all-pages/admin-view/admin-view.component';
import { ConfirmOrderComponent } from './public/all-pages/confirm-order/confirm-order.component';
import { CheckAddressComponent } from './public/all-pages/check-address/check-address.component';
import { AllPagesModule } from './public/all-pages/all-pages.module';

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
    AdminViewComponent,
    ConfirmOrderComponent,
    CheckAddressComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    ToastrModule.forRoot(),
    AllPagesModule
  ],
  
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorInterceptor,
    multi:true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
