import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenudetailsComponent } from './components/menudetails/menudetails.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'menu', component: MenuComponent },
  {path:'menudetails/:menuid',component:MenudetailsComponent}

  
];
