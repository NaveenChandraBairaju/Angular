import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foodcategorylist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foodcategorylist.component.html',
  styleUrl: './foodcategorylist.component.css'
})
export class FoodcategorylistComponent {
  categories: any = [
    {
      name: 'Dosa',
      items: ['Ghee Roast', 'Paper Roast', 'Masala Dosa'],
      showItems: true
    },
    {
      name: 'Idly',
      items: ['Chilli Idly', 'Podi Idly', 'Sambar Idly'],
      showItems: false
    },
    {
      name: 'Pongal',
      items: ['Ven Pongal', 'Chakkara Pongal', 'Millets Pongal'],
      showItems: false
    }
  ];
}

