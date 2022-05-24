import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardGuard } from 'src/app/jwtSource/adminAuthGuard/admin-auth-guard.guard';
import { UserAuthGuardGuard } from 'src/app/jwtSource/userAuthGuard/user-auth-guard.guard';
import { AddressPageComponent } from './address-page/address-page.component';
import { AdminAddHotelComponent } from './admin-add-hotel/admin-add-hotel.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHotelViewComponent } from './admin-hotel-view/admin-hotel-view.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { CartComponent } from './cart/cart.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CheckAddressComponent } from './check-address/check-address.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path: '',component:HomePageComponent
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
  },
  {
    path: 'order',component:ConfirmOrderComponent,canActivate:[UserAuthGuardGuard]
  },
  {
    path: 'checkAddress',component:CheckAddressComponent,canActivate:[UserAuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPagesRoutingModule { }
