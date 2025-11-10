import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-foodcategorylist',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './foodcategorylist.component.html',
  styleUrl: './foodcategorylist.component.css'
})
export class FoodcategorylistComponent {
  categories: any = [
    {
      name: 'Dosa',
      varities: ['Ghee Roast', 'Paper Roast', 'Masala Dosa'],
      showItems: true
    },
    {
      name: 'Idly',
      varities: ['Chilli Idly', 'Podi Idly', 'Sambar Idly'],
      showItems: true
    },
    {
      name: 'Pongal',
      varities: ['Ven Pongal', 'Chakkara Pongal', 'Millets Pongal'],
      showItems: false
    }
  ];
}

