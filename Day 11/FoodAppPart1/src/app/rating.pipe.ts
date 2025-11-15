import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true
})
export class RatingPipe implements PipeTransform {

  transform(value: number): string {
    const fullStars = Math.floor(value);
    const halfStar = value % 1 >= 0.5 ? '★' : '☆';
    const emptyStars = 5 - Math.ceil(value);
    return '★'.repeat(fullStars) + halfStar + '☆'.repeat(emptyStars);
  }

}
