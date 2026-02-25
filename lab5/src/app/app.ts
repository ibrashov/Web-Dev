import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

import { ProductListComponent } from './pages/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get selectedProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.productService.getProductsByCategory(this.selectedCategoryId);
  }
}