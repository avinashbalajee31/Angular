import { HostListener, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AdminAuthGuardGuard } from './jwtSource/adminAuthGuard/admin-auth-guard.guard';
import { UserAuthGuardGuard } from './jwtSource/userAuthGuard/user-auth-guard.guard';
import { AddressPageComponent } from './address-page/address-page.component';
import { AdminAddHotelComponent } from './admin-add-hotel/admin-add-hotel.component';
import { AdminHotelViewComponent } from './admin-hotel-view/admin-hotel-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [
  {
    path: 'home',component:HomePageComponent
  },
  {
    path: 'addHotels',component:AdminAddHotelComponent, canActivate:[AdminAuthGuardGuard]
  },
  {
    path: 'viewHotels',component:AdminHotelViewComponent,canActivate:[AdminAuthGuardGuard]
  },
  {
    path: 'viewUsers',component:AdminViewComponent,canActivate:[AdminAuthGuardGuard]
  },
  {
    path: 'adminLogin',component:AdminLoginComponent
  },
  {
    path: 'adminHome',component:AdminHomeComponent,canActivate:[AdminAuthGuardGuard]
  },
  {
    path: 'menu',component:MenuComponent,canActivate:[UserAuthGuardGuard]
  },
  {
    path: 'login',component:LoginPageComponent
  },
  {
    path: 'register',component:RegisterPageComponent
  },
  {
    path: 'addressPage',component:AddressPageComponent,
  },
  {
    path: 'Category',component:CategoryPageComponent,canActivate:[UserAuthGuardGuard]
  },
  {
    path: 'Hotel',component:HotelsComponent,canActivate:[UserAuthGuardGuard]
  },
  {
    path: 'Cart',component:CartComponent,canActivate:[UserAuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
