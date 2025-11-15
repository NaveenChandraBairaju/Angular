import { Component } from '@angular/core';

@Component({
  selector: 'app-re-order-from-history-of-orders',
  standalone: true,
  imports: [],
  templateUrl: './re-order-from-history-of-orders.component.html',
  styleUrl: './re-order-from-history-of-orders.component.css'
})
export class ReOrderFromHistoryOfOrdersComponent {
  constructor() {
    console.log("Re order from history component which is inside Order history Component");
   }

}
