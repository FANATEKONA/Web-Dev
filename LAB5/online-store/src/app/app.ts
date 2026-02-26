import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product';
import {Category} from './models/category';
import {ProductServices} from './services/product.services';
import {ProductList} from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategory: Category | null = null;

  constructor(private productService: ProductServices) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category ) {
    this.selectedCategory = category;
    this.products = this.productService.getProductsByCategory(category.id);
  }
}
