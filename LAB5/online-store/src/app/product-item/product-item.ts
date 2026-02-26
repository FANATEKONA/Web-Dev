import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Product} from '../models/product';
import {platform} from 'node:os';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
    @Input() product!: Product;

    @Output() remove = new EventEmitter<number>();

    like(){
      this.product.likes+=1;
    }
    onDelete(){
      this.remove.emit(this.product.id);
    }

  share(platform: string) {
    const message = encodeURIComponent(`Check out this ${this.product.name} on Kaspi: ${this.product.link}`);

    const url = platform === 'whatsapp'
      ? `https://wa.me/?text=${message}`
      : `https://t.me/share/url?url=${this.product.link}&text=${this.product.name}`;

    window.open(url, '_blank');
  }
}
