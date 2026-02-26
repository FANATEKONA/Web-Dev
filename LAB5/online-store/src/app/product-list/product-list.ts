import { Component, Input } from '@angular/core';
import {Product} from '../models/product';
import {ProductItem} from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
    @Input() products: Product[] = [];

    removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}


/*i\tor: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  // Входные данные (Angular Signals)
  rating = input<number>(0); // текущий рейтинг
  readonly = input<boolean>(false); // режим "только чтение"

  // Выходное событие при клике
  ratingChange = output<number>(); //

  // Локальное состояние для отслеживания наведения мыши
  hoveredRating = signal<number>(0); //

  onStarHover(star: number): void {
    if (!this.readonly()) {
      this.hoveredRating.set(star); //
    }
  }

  onStarLeave(): void {
    this.hoveredRating.set(0); //
  }

  onStarClick(star: number): void {
    if (!this.readonly()) {
      this.ratingChange.emit(star); //
    }
  }

  isStarFilled(star: number): boolean {
    // Если пользователь навел мышь, подсвечиваем до hoveredRating
    if (this.hoveredRating() !== 0) {
      return star <= this.hoveredRating(); //
    }
    // Иначе подсвечиваем текущий рейтинг
    return star <= this.rating(); //
  }
}
<div class="star-rating">
  @for (star of [1, 2, 3, 4, 5]; track star) {
    <span
      class="star"
      [class.filled]="isStarFilled(star)"
      [class.readonly]="readonly()"
      (mouseenter)="onStarHover(star)"
      (mouseleave)="onStarLeave()"
      (click)="onStarClick(star)">
      @if (isStarFilled(star)) {
        ★
      } @else {
        ☆
      }
    </span>
  }
</div>
*

*

* item
<app-star-rating
  [rating]="product().rating"
  [readonly]="false"
  (ratingChange)="onRatingChange($event)">
</app-star-rating>


onRatingChange(newRating: number): void {
  // Здесь обновляется локальный сигнал или данные в БД
  this.product().rating = newRating;
}



* */
