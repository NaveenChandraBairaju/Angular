import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HistoryOfOrdersComponent } from './history-of-orders/history-of-orders.component';
import { ReOrderFromHistoryOfOrdersComponent } from './re-order-from-history-of-orders/re-order-from-history-of-orders.component';

const routes: Routes = [
  //{path:'historyoforders',component:HistoryOfOrdersComponent},
  {path:'reorderfromhistory',component:ReOrderFromHistoryOfOrdersComponent},
  {
    path: 'orderlazyloading', // default route for this module path
    loadComponent: () =>
      import(
        '../order-history/history-of-orders/history-of-orders.component'
      ).then((m) => m.HistoryOfOrdersComponent),
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderHistoryRoutingModule { }
