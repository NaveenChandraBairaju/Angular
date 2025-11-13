import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenudetailsComponent } from './components/menudetails/menudetails.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RxjsfoodmenuComponent } from './components/rxjsfoodmenu/rxjsfoodmenu.component';
import { CartItemComponent } from './cart-item/cart-item.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'menu', component: MenuComponent },
  { path:'menudetails/:menuid',component:MenudetailsComponent},
  { path:'recipes', component: RecipeComponent },
  { path:'rxjsrecipes', component: RxjsfoodmenuComponent },
  { path:'cart', component: CartItemComponent },
  
];
