import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h3>Item Name</h3>
      <p>Quantity: {{ quantity() }}</p>

      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  quantity = signal(1);
  //private renderCount = 0;

  increment() {
    this.quantity.set(this.quantity() + 1);
  }

  decrement() {
    if (this.quantity() > 0) {
      this.quantity.set(this.quantity() - 1);
    }
  }

  //below lifecycle will not be called during signals coz entire page is not re-rendered
  ngOnInit() {
    console.log('ng on init called');
  }
  ngOnChanges() {
    console.log('ng on change called');
  }
  constructor() {
    console.log('constructor called');
  }
  ngOnDestroy(){
    console.log("destroy called")
  }
}
