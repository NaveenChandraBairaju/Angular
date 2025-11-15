import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenudetailsComponent } from './components/menudetails/menudetails.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RxjsfoodmenuComponent } from './components/rxjsfoodmenu/rxjsfoodmenu.component';
import { CartItemComponent } from './cart-item/cart-item.component';
//import { PromobannerComponent } from './components/promobanner/promobanner.component';
//import { HistoryOfOrdersComponent } from './features/order-history/history-of-orders/history-of-orders.component';
//import { ReOrderFromHistoryOfOrdersComponent } from './features/order-history/re-order-from-history-of-orders/re-order-from-history-of-orders.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactusComponent ,
    canActivate: [authGuard]
  },
  { path: 'menu', component: MenuComponent },
  { path:'menudetails/:menuid',component:MenudetailsComponent},
  { path:'recipes', component: RecipeComponent },
  { path:'rxjsrecipes', component: RxjsfoodmenuComponent },
  { path:'cart', component: CartItemComponent },
  //{ path:'promobanner', component: PromobannerComponent },
  { path:'banner', component: BannerComponent ,
    canActivate: [authGuard]
  },
  {
    path: 'ordermodule',loadChildren: () =>
      import('../app/features/order-history/order-history.module').then(m => m.OrderHistoryModule)
      
  },
  //{ path:'orderhistory', component: HistoryOfOrdersComponent },
  //{ path:'reorderfromhistory', component: ReOrderFromHistoryOfOrdersComponent },
  {
    path: 'login',
    component: LoginComponent,
  },

  
   
  
];
