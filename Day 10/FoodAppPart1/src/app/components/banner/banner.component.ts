import { Component } from '@angular/core';
import { PromobannerComponent } from '../promobanner/promobanner.component';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [PromobannerComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  // No @Input() here — instead, define variables if needed
  offerText = 'Hurry!!!!!🎉 50% OFF on all orders';
  isNewUser = true;
  visibleDuration = 10;
}