import { Component } from '@angular/core';

@Component({
  selector: 'app-history-of-orders',
  standalone: true,
  imports: [],
  templateUrl: './history-of-orders.component.html',
  styleUrl: './history-of-orders.component.css'
})
export class HistoryOfOrdersComponent {
  constructor() {
    console.log("History of orders component which is inside Order history Component");
   }

}
